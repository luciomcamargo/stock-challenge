import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Chart(props) {
  const options = {
    title: {
      text: 'Stock price'
    },
    chart: {
      height: 550
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
    plotOptions: {
      series: {
        turboThreshold: 50000
      }
    },
    xAxis: {
      categories: props.data.map(dates => dates[0])
    },
    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat: '<small>{point.key}</small><table>',
      pointFormat:
        '<tr><td style="color: {series.color}">{series.name}: </td>' +
        '<td style="text-align: right"><b>${point.y}</b></td></tr>',
      footerFormat: '</table>',
      valueDecimals: 2
    },

    series: [
      {
        showInLegend: false,
        name: 'Price',
        data: props.data
      }
    ]
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default Chart;
