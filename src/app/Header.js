import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">
        <h1>Oregon Football Players</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/players/add">Add Player </NavLink>
      </header>
    );
  }

}
 
export default Header;