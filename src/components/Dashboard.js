import React, { Component } from 'react';
import Tile from './Tile';


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tiles: [{name:'indices'}, {name:'coins'}]
    }
  }

  render() {

    return (
      <div>
        <div class="container border d-flex align-items-center justify-content-center">
        <div class="row">
          <div class="col m-2"><h3>Markets</h3></div>
          <div class="w-100"></div>
          
          {
              this.state.tiles.map(tile => <div class="col m-2"><Tile data={tile} /></div>)
          }
          
        </div>
        </div>
 
      </div>
    );
  }
}

export default Dashboard;