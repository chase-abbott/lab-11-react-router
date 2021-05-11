import { Component } from 'react';
import { getPlayerById, deletePlayer } from '../api/players-api';

import './PlayerDetail.css';

export default class PlayerDetail extends Component {
  state = {
    player: null,
    loading: false
  }

  async componentDidMount() {
    const { match } = this.props;
    const player = await getPlayerById(match.params.id);
    
    if (player){
      this.setState({ player : player });
    }
  }

  handleDelete = async () => {
    const { history } = this.props;
    const { player } = this.state;
    const confirmation = `Are you sure you want to delete ${player.name}?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading : true });
      await deletePlayer(player.id);
      history.push('/players');

    }
    catch (err){
      this.setState({ loading : false });
      console.log(err.message);
    }
  }
 
  render() {
    const { player } = this.state;
   
    if (!player) return null;
   
    return (
      <div className="PlayerDetail">
        <div className="ContainerDiv">
          <h2> {player.name} </h2>
          <img src={player.url_image} alt={player.name}></img>
          <h4> {player.position}</h4>
          <h4> Enrolled: {player.yearEnrolled}</h4> 
          { player.isTransfer && <h4 className="transfer"> Transfer </h4>}
          { !player.isTransfer && <h4 className="signee"> Signee </h4>}
          { player.isActive && <h4 className="active"> Active</h4>}
          { !player.isActive && <h4 className="graduated"> Graduated </h4>}
          <button onClick={this.handleDelete}> Delete Player </button>
        </div>
      </div>
    );
  }

}