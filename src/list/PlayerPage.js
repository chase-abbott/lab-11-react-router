import { Component } from 'react';
import { getPlayers } from '../api/players-api';
import PlayerList from '../list/PlayerList';
import './PlayerPage.css';

export default class PlayerPage extends Component {
 state = {
   players: [],
   isLoading: false
 }
 async componentDidMount(){
   try {
     this.setState({ isLoading : true });
     const response = await getPlayers();
     this.setState({ players : response });
   }
   finally {
     this.setState({ isLoading : false });
   }
 }  
  
 render() {
   const { players } = this.state;
   const { isLoading } = this.state;
   return (
     <div className="PlayerPage">
       { isLoading && <div className="loader"></div>}
       <PlayerList players={players}/>
     </div>
   );
 }

}
