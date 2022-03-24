import React, { Component } from 'react';
import { api_call_test } from './helpers'

class TileCoins extends Component {

constructor(props) {
    super(props);
    this.state = {
       data: api_call_test,
    }
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="card border-secondary mb-3">
            <div class="card-header">Coins</div>
            <div class="card-body text-secondary">
              {
                this.state.data.map(coin => <h5 class="card-title">{coin.name} : ${coin.price}</h5>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TileCoins;