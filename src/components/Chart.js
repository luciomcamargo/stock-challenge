import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export class Chart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const options = {
      title: {
        text: 'Stock price'
      },
      chart: {
        height: 600
      },
      credits: {
        enabled: false
      },
      yAxis: {
        title: 'Adjusted Close Prices',
        labels: {
          formatter: function() {
            return '$ ' + this.axis.defaultLabelFormatter.call(this);
          }
        }
      },
      xAxis: {
        categories: this.props.data.map(dates => dates[0])
      },
      series: [
        {
          showInLegend: false,
          data: this.props.data
        }
      ]
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default Chart;
