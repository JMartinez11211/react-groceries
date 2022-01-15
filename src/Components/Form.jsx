import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      item: " ",
      unit: " ",
      quantity: " ",
      isPurchased: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getData(this.state);
    this.setState({
      item: "",
      units: "",
      quantity: 0,
      isPurchased: false,
    });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div id="itemDiv">
          <label>item</label>
          <input
            id="item"
            value={this.state.item}
            onChange={this.handleChange}
          />
        </div>
        <div id="unitDiv">
          <label> unit:</label>
          <input
            id="unit"
            value={this.state.unit}
            onChange={this.handleChange}
          />
        </div>
        <div id="quantityDiv">
          <label>Quantity: </label>
          <input
            id="quantity"
            type={"number"}
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
