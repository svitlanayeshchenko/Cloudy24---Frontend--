import './RadioButtons.css';
import React, { Component } from 'react';
import TogleButton from '../togleButton/TogleButton';

class RadioButtons extends Component {

  constructor(props) {
    super(props);
    this.items = props.items;
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler(id) {
    this.items.forEach(item => {
      if (id === item.id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    this.forceUpdate();
  }

  render() {
    return (
      <div className="radio-buttons">
        {
          this.items.map(item => {
            return (
              <div className="toggle-item" key={JSON.stringify(item)}>
                <TogleButton state={item} callBack={this.buttonClickHandler} />
              </div>
            )
          }
          )
        }
      </div>
    );
  }
}

export default RadioButtons;
