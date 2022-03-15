import React, { Component } from 'react';
import TileCoins from './TileCoins'

class Tile extends Component {

  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   data: data,
  //   // }
  // }

  renderSwitch(param) {
    switch (param) {
      case 'foo':
        return 'bar';
      default:
        return 'foo';
    }
  }

  render() {
    return (

      <div>
        {(() => {
          switch (this.props.data.name) {
            case 'indices':
              return <div>
                <div class="container">
                  <div class="card border-secondary mb-3">
                    <div class="card-header">{this.props.data.name}</div>
                    <div class="card-body text-secondary">
                      <h5 class="card-title">SPY</h5>
                      <h5 class="card-title">QQQ</h5>
                    </div>
                  </div>
                </div>

              </div>
            case 'coins':
              return <TileCoins data={{ name: 'coins' }} />
            default:
              return null
          }
        })()}
      </div>
    );
  }
}

export default Tile;