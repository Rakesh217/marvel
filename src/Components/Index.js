import React, { Component } from "react";
import Data from "../data.json";
export default class Index extends Component {
  state = {
    charName: "",
    data: [],
  };
  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({ charName: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.receiveCharName(this.state.charName);
  };
  componentDidMount = () => {
    this.setState({ data: Data });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.charData !== this.state.data) {
      this.setState({ data: this.props.charData });
      console.log("propData", this.props.charData);
    }
  };
  render() {
    console.log("Name", this.state.charName);
    console.log("Data", this.state.data);
    return (
      <div>
        Search For Your Favorite Character
        <form class="form-inline mr-auto">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            value={this.state.charName}
            onChange={this.handleOnChange}
          />
          <button
            className="btn blue-gradient btn-rounded btn-sm my-0"
            onClick={this.handleClick}
            type="submit"
          >
            Search
          </button>
        </form>
        <div>
          {this.state.data !== null
            ? this.state.data.map((value) =>
                value.name
                  .toLowerCase()
                  .includes(this.state.charName.toLowerCase()) ? (
                  <div style={{ opacity: "0.6" }}>
                    <div
                      className="card mb-4 animation zoomIn"
                      style={{ width: "25rem", marginLeft: "15%" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">{value.name}</h5>
                        <p className="card-text">Height: {value.height}</p>
                        <p className="card-text">Mass: {value.mass}kg</p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Home World: {value.homeworld}
                        </li>
                        <li className="list-group-item">
                          Species: {value.species}
                        </li>
                        <li className="list-group-item">
                          <p>Hair Color: {value.hairColor}</p>
                          <p>Eye Color: {value.eyeColor}</p>
                          <p>Skin Color: {value.skinColor}</p>
                        </li>
                        <li className="list-group-item">
                          {value.includes("masters")
                            ? value.masters.map((index) => (
                                <p>{value.masters[index]}</p>
                              ))
                            : null}
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  "Not Found"
                )
              )
            : ""}
        </div>
      </div>
    );
  }
}
