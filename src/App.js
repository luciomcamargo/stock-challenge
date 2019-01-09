import React, { Component } from 'react';
import Search from './components/Search';
import Chart from './components/Chart';
import KPIs from './components/KPIs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  updateAppState = data => {
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <div className='App'>
        <Search callbackprop={this.updateAppState} />
        <KPIs data={this.state.data} />
        <Chart data={this.state.data} />
      </div>
    );
  }
}

export default App;
