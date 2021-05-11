import { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  state = {
    name:'Chase',
    position: 'Quarterback',
    url_image: 'chase.jpeg',
    yearEnrolled: 1994,
    isTransfer: false,
    isActive: false,
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleDropDown = ({ target }) => {
    this.setState({ position : target.value });
  }

  handleChangeImage = ({ target }) => {
    this.setState({ url_image : target.value });
  }

  handleChangeYear = ({ target }) => {
    this.setState({ yearEnrolled : target.value });
  }

  handleTransferChange = ({ target }) => {
    this.setState({ isTransfer : target.checked });
  }

  handleActiveChange = ({ target }) => {
    this.setState({ isActive : target.checked });
  }

  render() {
    const { name, url_image, yearEnrolled } = this.state;
    return (
      <form className="Form" onSubmit={this.handleSubmit}>

        <p>
          <label>
            <span>Player Name</span>
            <input name="name" required placeholder="Name of the Oregon football player"
              value={name} onChange={this.handleChangeName}/>
          </label>
        </p>

        <p>
          <label>
            <span> Position:</span>
            <select name="position" onChange={this.handleDropDown}>
              <option value="Quarterback">Quarterback</option>
              <option value="Running Back">Running Back</option>
              <option value="Wide Reciever">Wide Reciever</option>
              <option value="Tight End">Tight End</option>
              <option value="Offensive Line">Offensive Line</option>
              <option value="Defensive Line">Defensive Line</option>
              <option value="Linebacker">Linebacker</option>
              <option value="Cornerback">Cornerback</option>
              <option value="Safety">Safety</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Player Image</span>
            <input name="image" required placeholder="Image URL"
              value={url_image} onChange={this.handleChangeImage}/>
          </label>
        </p>

        <p>
          <label>
            <span>Year Enrolled</span>
            <input name="year" required placeholder="Year Enrolled"
              value={yearEnrolled} onChange={this.handleChangeYear}/>
          </label>
        </p>

        <p>
          <label>
            <span> Are They a Transfer?</span>
            <span className="checkbox">
              <label> Yes </label>
              <input type="checkbox" name="transferYes" onChange={this.handleTransferChange}></input>
            </span>
          </label>
        </p>

        <p>
          <label>
            <span> Are They Active?</span>
            <span className="checkbox">
              <label> Yes </label>
              <input type="checkbox" name="activeYes" onChange={this.handleActiveChange}></input>
            </span>
          </label>
        </p>

        <button> Add a Player </button>
      </form>
    );
  }

}