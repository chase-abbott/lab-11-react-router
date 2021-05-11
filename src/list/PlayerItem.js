import { Component } from 'react';
import './PlayerItem.css';
import { Link } from 'react-router-dom';

export default class PlayerItem extends Component {
  
  render() {

    const { player } = this.props;
    return (
      <div className="PlayerItem">
        <li className="PlayerListElement" >
          <Link to={`/players/${player.id}`}>
            <h2> {player.name} </h2>
            <img src={player.url_image} alt={player.name}></img>
            <h4> {player.position}</h4>
          </Link>
        </li>
      </div>
    );
  }

}