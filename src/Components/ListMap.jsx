import React, { Component } from "react";
import List from "./List";

class ListMap extends Component {
  render() {
    return (
      <div id="cardContainer">
        {this.props.data1.list.map((data, index) => {
          return (
          !data.isPurchased &&(
            <List
              data={data}
              changeBoolean={this.props.changeBoolean}
              key={index}
            />
          )
          );
        })}
      </div>
    );
  }
}

export default ListMap;
