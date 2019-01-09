import React, { Component } from 'react';

export class KPIs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mapPrices = this.props.data.map(price => price[1]);
    const lowestValue = Math.min(...mapPrices);
    const highestValue = Math.max(...mapPrices);
    const mdd = ((highestValue - lowestValue) / highestValue) * 100 + '%';
    const roi =
      ((mapPrices[mapPrices.length - 1] - mapPrices[0]) / mapPrices[0]) * 100 +
      '%';
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
}

export default KPIs;
