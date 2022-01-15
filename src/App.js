import Header from "./Components/Header";
import "./App.css";
import React from "react";
import Form from "./Components/Form";
import ListMap from "./Components/ListMap";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  getData = (post) => {
    this.setState({ list: [...this.state.list, post] });
  };

  changeBoolean = (isPurchased) => {
    this.setState((prevpost) => {
      return {
        list: prevpost.list.map((list) => {
          return list.isPurchased == isPurchased
            ? { ...list, isPurchased: !list.isPurchased }
            : list;
        }),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form x={this.state} getData={this.getData} />
        <ListMap data1={this.state} changeBoolean={this.changeBoolean} />
      </div>
    );
  }
}

export default App;
