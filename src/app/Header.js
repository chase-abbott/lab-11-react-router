import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">
        <Link to="/">Home</Link>
        <Link to="/players">Players</Link>
        
        <h1>Oregon Football Players</h1>
        
      </header>
    );
  }

}
 
export default Header;