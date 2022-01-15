import React, { Component } from "react";

class List extends Component {
  changeBoolean = () => {
    this.props.changeBoolean(this.props.data.isPurchased);
  };

  render() {
    return (
      <div>
        <h3>{this.props.data.item}</h3>
        <h3>
          {this.props.data.quantity} {this.props.data.unit}
        </h3>
        <button onClick={() => this.changeBoolean()}>Remove</button>
      </div>
    );
  }
}

export default List;
