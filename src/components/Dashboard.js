import React, { Component } from 'react';
import Tile from './Tile';


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tiles: [{name:'indices'}, {name:'coins'}, {name:'gdp'}]
    }
  }

  render() {

    return (
      <div className="App">
        <div class="container border d-flex align-items-center justify-content-center">
          {
              this.state.tiles.map(tile => <Tile data={tile} />)
          }
          

        </div>
      </div>
    );
  }
}

export default Dashboard;