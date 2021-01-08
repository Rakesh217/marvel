import React, { Component } from "react";
import Index from "./Index";
import Data from "../data.json";

export default class Home extends Component {
  state = {
    data: [],
    charName: "",
  };
  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({ charName: e.target.value });
  };
  // handleClick = (e) => {
  //   e.preventDefault();
  //   this.props.receiveCharName(this.state.charName);
  // };
  componentDidMount = () => {
    // let myHeader = new Headers();
    // myHeader.append("Content-Type", "application/json");
    // fetch("http://hp-api.herokuapp.com/api/characters", {
    //   method: "GET",
    //   headers: myHeader,
    // })
    //   .then((result) => result.json())
    //   .then((apiData) => this.setState({ data: apiData }))
    //   .catch((error) => console.log("fetchError", error));
  };
  render() {
    // console.log("HomeData", this.state.data[0]);
    {
      // <ul className="list-group list-group-flush">
      //   <li className="list-group-item">Home World: {value.homeworld}</li>
      //   <li className="list-group-item">Species: {value.species}</li>
      //   <li className="list-group-item">
      //     <p>Hair Color: {value.hairColor}</p>
      //     <p>Eye Color: {value.eyeColor}</p>
      //     <p>Skin Color: {value.skinColor}</p>
      //   </li>
      // </ul>;
    }
    return (
      <div class="jumbotron">
        <h1 class="display-3" style={{ color: "#9a9c46" }}>
          <b>Search For Your Favorite Characters Here</b>
        </h1>
        <form class="form-inline mr-auto">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "30rem", marginLeft: "30rem" }}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            value={this.state.charName}
            onChange={this.handleOnChange}
          />
        </form>
        <hr></hr>
        <div class="row">
          {Data.map((value, index) =>
            value.name
              .toLowerCase()
              .includes(this.state.charName.toLowerCase()) ? (
              <div class="col" style={{ padding: "1rem", margin: "1rem" }}>
                <div
                  className="card"
                  style={{
                    width: "12rem",
                    height: "15rem",
                    backgroundColor: "black",
                  }}
                >
                  <img
                    src={value.image}
                    className="card-img-top "
                    alt="..."
                    style={{ width: "12rem", height: "10rem" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    );
  }
}
