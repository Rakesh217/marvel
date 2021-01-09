import React, { Component } from "react";

export default class Home extends Component {
  state = {
    data: [],
    charName: "",
  };
  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({ charName: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
  };
  componentDidMount = () => {
    let myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");
    fetch("http://localhost:5000/getCharacters", {
      method: "GET",
      headers: myHeader,
    })
      .then((result) => result.json())
      .then((apiData) => this.setState({ data: apiData }))
      .catch((error) => console.log("fetchError", error));
  };
  render() {
    console.log("HomeData", this.state.data[0]);
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
      <div class="main">
        <h1 class="display-3" style={{ color: "#9a9c46" }}>
          <b>Search For Your Favorite Characters Here</b>
        </h1>
        <form class="form-inline mr-auto">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "30rem", marginLeft: "30rem", opacity: 0.7 }}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            value={this.state.charName}
            onChange={this.handleOnChange}
          />
        </form>
        <hr></hr>
        {/*<div
          id="carouselBasicExample"
          class="carousel slide carousel-fade"
          data-mdb-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="0"
              class="active"
            ></li>
            <li
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="1"
            ></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active" id="carouselBasicExample1">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>

            <div class="carousel-item" id="carouselBasicExample2">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselBasicExample"
            role="button"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselBasicExample"
            role="button"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
          </div>**/}
        <div className="row">
          {this.state.data.map((value, index) =>
            value.name
              .toLowerCase()
              .includes(this.state.charName.toLowerCase()) ? (
              <div>
                <img
                  src={value.image}
                  className="card-img-top "
                  alt="..."
                  style={{ width: "10rem", height: "10rem", padding: "2rem" }}
                />
                <h5
                  className="card-title"
                  style={{ paddingRight: "2rem", paddingLeft: "2rem" }}
                >
                  {value.name}
                </h5>
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
