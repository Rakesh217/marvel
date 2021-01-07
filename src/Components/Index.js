import React, { Component } from "react";

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
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.charData !== this.state.data) {
      this.setState({ data: this.props.charData });
      console.log("propData", this.props.charData);
      // {
      //   this.state.data !== null
      //     ? this.state.data.map((value, index) =>
      //         this.state.charName
      //           .toLowerCase()
      //           .includes(this.state.data[index].name.toLowerCase()) ? (
      //           <div>
      //             <p>{this.state.data[index].name}</p>
      //           </div>
      //         ) : (
      //           ""
      //         )
      //       )
      //     : "Not Found";
      // }
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
        <div></div>
      </div>
    );
  }
}
