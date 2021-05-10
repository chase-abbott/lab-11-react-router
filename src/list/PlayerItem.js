import { Component } from 'react';
import './PlayerItem.css';

export default class PlayerItem extends Component {
  
  render() {

    const { player } = this.props;
    return (
      <div className="PlayerItem">
        <li className="PlayerListElement" >
          <h2> {player.name} </h2>
          {/* <img src={player.url_image} alt={player.name}></img> */}
          <h4> {player.position}</h4>
          <h4> Enrolled: {player.yearEnrolled}</h4> 
          { player.isTransfer && <h4 className="transfer"> Transfer </h4>}
          { !player.isTransfer && <h4 className="signee"> Signee </h4>}
          { player.isActive && <h4 className="active"> Active</h4>}
          { !player.isActive && <h4 className="graduated"> Graduated </h4>}
        
        </li>
      </div>
    );
  }

}