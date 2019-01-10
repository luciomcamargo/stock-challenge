import React from 'react';

function KPIs(props) {
  var mapPrices = props.data.map(price => price[1]);
  let lowestValue = Math.min(...mapPrices);
  let indexOfLowestValue = mapPrices.indexOf(lowestValue);
  let peakValue = Math.max(
    ...mapPrices.slice(indexOfLowestValue + 1, mapPrices.length)
  );
  let PL = peakValue - lowestValue;
  let mdd = ((PL / peakValue) * 100).toFixed(2) + '%';

  const netProfit = mapPrices[0] - mapPrices[mapPrices.length - 1];
  const roi =
    ((netProfit / mapPrices[mapPrices.length - 1]) * 100).toFixed(2) + '%';

  do {
    let i = mapPrices.length - 1;
    if (mapPrices[mapPrices.length - 1] !== lowestValue) {
      i--;
    } else {
      lowestValue = mapPrices[i];
      indexOfLowestValue = mapPrices.indexOf(lowestValue);

      peakValue = Math.max(
        ...mapPrices.slice(indexOfLowestValue - 1, mapPrices.length)
      );

      PL = peakValue - lowestValue;

      mdd = ((PL / peakValue) * 100).toFixed(2) + '%';

      break;
    }
  } while (mapPrices[mapPrices.length - 1] === lowestValue);
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
