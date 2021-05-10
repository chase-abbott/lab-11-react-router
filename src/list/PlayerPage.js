import { Component } from 'react';
import { getPlayers } from '../api/players-api';
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
   const { isLoading } = this.state;
   return (
     <div className="PlayerPage">
       { isLoading && <div class="loader"></div>}
     </div>
   );
 }

}
