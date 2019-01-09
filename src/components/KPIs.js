import React from 'react';

function KPIs(props) {
  const mapPrices = props.data.map(price => price[1]);
  const lowestValue = Math.min(...mapPrices);
  const indexOfLowestValue = mapPrices.indexOf(lowestValue);
  const peakValue = Math.max(
    ...mapPrices.slice(indexOfLowestValue + 1, mapPrices.length)
  );
  const PL = peakValue - lowestValue;
  const mdd = ((PL / peakValue) * 100).toFixed(2) + '%';

  const netProfit = mapPrices[0] - mapPrices[mapPrices.length - 1];
  const roi =
    ((netProfit / mapPrices[mapPrices.length - 1]) * 100).toFixed(2) + '%';

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
