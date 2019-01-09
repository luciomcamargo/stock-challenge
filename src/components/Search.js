import React, { Component } from 'react';
import axios from 'axios';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: '',
      date: ''
    };
  }
  handleStock = event => {
    this.setState({ stock: event.target.value.toUpperCase() });
  };
  handleDate = event => {
    this.setState({ date: event.target.value });
  };

  handleSubmit = event => {
    const { stock, date } = this.state;
    axios

      .get(
        `https://www.quandl.com/api/v3/datasets/EOD/${stock}/data.json?column_index=11&start_date=${date}&api_key=gK9RPBEZVkasaPon3c4R`
      )
      .then(res => {
        const data = res.data.dataset_data.data;

        this.props.callbackprop(data);
        console.log(data);
      });

    event.preventDefault();
  };

  render() {
    const divStyle = {
      display: 'flex',
      justifyContent: 'space-around'
    };
    return (
      <div style={divStyle}>
        <form className='form-row' onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.stock}
            onChange={this.handleStock}
            placeholder='Stock Symbol'
          />
          <input
            style={{ marginLeft: '5px', marginRight: '5px' }}
            type='date'
            value={this.state.date}
            onChange={this.handleDate}
            placeholder='Start Date'
          />
          <button className='btn btn-primary'>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
