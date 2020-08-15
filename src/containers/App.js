import React, { Component } from "react";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary.js";

//! For creating STATE
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onsearchchange = (event) => {
    this.setState({ searchfield: event.target.value }); //! to change anything in state use .setState()
  };

  render() {
    const { robots, searchfield } = this.state;

    const filteredrobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className=""> RoboFriends </h1>
        <SearchBox searchchange={this.onsearchchange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredrobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
