import { Component } from 'react';
import { getPlayerById } from '../api/players-api';

import './PlayerDetail.css';

export default class PlayerDetail extends Component {
  state = {
    player: null
  }


  async componentDidMount() {
    const { match } = this.props;
    const player = await getPlayerById(match.params.id);
    
    if (player){
      this.setState({ player : player });
    }
  }
 
  render() {
    const { player } = this.state;
   
    if (!player) return null;
    console.log(player.name);
   
    return (
      <div className="PlayerDetail">
        <h2> {player.name} </h2>
        <img src={player.url_image} alt={player.name}></img>
      </div>
    );
  }

}