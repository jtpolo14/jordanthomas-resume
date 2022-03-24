import React, { Component } from 'react';
import TileCoins from './TileCoins'
import TileIndices from './TileIndices'

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
            case 'coins':
              return <TileCoins data={{ name: 'coins' }} />
            case 'indices':
              return <TileIndices data={{ name: 'indices' }} />
            default:
              return null
          }
        })()}
      </div>
    );
  }
}

export default Tile;