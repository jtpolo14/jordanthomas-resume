import React, { Component } from 'react';
import { api_call_test_indices } from './helpers'

class TileCoins extends Component {

constructor(props) {
    super(props);
    this.state = {
       data: api_call_test_indices,
    }
  }

  render() {
    return (
   
    <div class="card">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Indices</h5>
      {
                    this.state.data.map(index => <p class="card-text">{index.name} : ${index.price}</p>)
                  }
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </div>
    );
  }
}

export default TileCoins;