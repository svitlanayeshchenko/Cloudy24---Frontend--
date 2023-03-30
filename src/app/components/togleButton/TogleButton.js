import './TogleButton.css';
import React, { Component } from 'react';

class TogleButton extends Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {

  }

  clickHandler(e) {
    e.preventDefault();
    this.props.callBack(this.props.state.id);
  }

  render() {
    if (this.props.state.selected) {
      return (
        <div className="togle-button togle-button-selected">
          <img src={this.props.state.image} alt="charity-image" onClick={this.clickHandler} />
        </div>
      );
    } 
    return (
      <div className="togle-button">
        <img src={this.props.state.image} alt="charity-image" onClick={this.clickHandler} />
      </div>
    );
  }
}

export default TogleButton;
