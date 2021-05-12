import { Component } from 'react';
import { addPlayer } from '../api/players-api';
import Form from '../common/Form.js';
import './PlayerAddPage.css';

export default class PlayerAddPage extends Component {
  state = {
    loading: false
  }
  
  handleAdd = async playerToAdd => {
    const { history } = this.props;
    try {
      this.setState({ loading: true });

      const newPlayer = await addPlayer(playerToAdd);

      history.push(`/players/${newPlayer.id}`);
    }
    catch (err){
      this.setState({ loading : false });
      console.log(err.message);
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="PlayerAddPage">
        { loading && <div className="loading"></div>}
        <h3> Add Player </h3>
        <Form onSubmit={this.handleAdd}/>
      </div>
    );
  }

}