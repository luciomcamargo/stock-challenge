import React from 'react';

function KPIs(props) {
  const mapPrices = props.data.map(price => price[1]).reverse();

  let lowestValue = Math.min(...mapPrices);

  let indexOfLowestValue = mapPrices.indexOf(lowestValue);

  let peakValue = Math.max(...mapPrices.slice(0, indexOfLowestValue));
  let PL = peakValue - lowestValue;
  let mdd = ((PL / peakValue) * 100).toFixed(2) + '%';

  const netProfit = mapPrices[mapPrices.length - 1] - mapPrices[0];

  const roi = ((netProfit / mapPrices[0]) * 100).toFixed(2) + '%';

  if (mapPrices[0] === lowestValue) {
    const pairedArray = mapPrices.reduce(function(result, value, index, array) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    }, []);

    const dif = pairedArray.filter(el => el[0] > el[1]);
    console.log(dif);

    const indexOfDrop = mapPrices.indexOf(dif[0][0]);
    const slicedArray = mapPrices.slice(indexOfDrop);
    const trough = Math.min(...slicedArray);
    const indexOfTrough = slicedArray.indexOf(trough);
    peakValue = Math.max(...slicedArray.slice(0, indexOfTrough));

    PL = peakValue - trough;
    mdd = ((PL / peakValue) * 100).toFixed(2) + '%';
  }

  const style = {
    display: 'flex',
    justifyContent: 'space-around'
  };
  return (
    <div style={style}>
      <h4>Maximum Drawdown {mdd !== 'NaN%' && mdd}</h4>
      <h4>Simple Return {roi !== 'NaN%' && roi}</h4>
    </div>
  );
}

export default KPIs;
