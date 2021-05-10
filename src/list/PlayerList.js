import { Component } from 'react';
import PlayerItem from './PlayerItem';
import './PlayerList.css';

export default class PlayerList extends Component {
  
  render() {
    const { players } = this.props;
    return (
    
      <ul className="PlayerList">
        {players.map(player => {
          return <PlayerItem key={player.id} player={player}></PlayerItem>;
        })}
      </ul>
  
    );
  }

}