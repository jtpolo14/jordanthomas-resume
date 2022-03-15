import React, { Component } from 'react';
import { api_call } from './helpers'

class TileCoins extends Component {

  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   data: data,
  //   // }
  // }

  render() {
    return (
      <div>
        <div class="container">
          <div class="card border-secondary mb-3">
            <div class="card-header">{this.props.data.name}</div>
            <div class="card-body text-secondary">
              <h5 class="card-title">BTC</h5>
              <h5 class="card-title">ETH</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TileCoins;