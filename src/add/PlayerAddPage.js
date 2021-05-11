import { Component } from 'react';
import Form from '../common/Form.js';
import './PlayerAddPage.css';

export default class PlayerAddPage extends Component {
  
  render() {
    return (
      <div className="PlayerAddPage">
        <h3> Add Player </h3>
        <Form/>
      </div>
    );
  }

}