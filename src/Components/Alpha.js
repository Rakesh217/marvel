import React, { Component } from "react";

export default class Alpha extends Component {
  state = {
    val: 65,
    alpha: "",
    alphaArr: [],
  };
  handleClick = (e, value) => {
    e.preventDefault();
    this.setState({ alpha: value });
  };
  printAlpha = () => {
    var i = 65;
    var j = 91;
    let str = [];
    for (let k = i; k < j; k++) {
      //Converting the char code to Alphabets
      str.push(String.fromCharCode(k));
    }
    this.setState({ alphaArr: str });
  };
  componentDidMount = () => {
    this.printAlpha();
  };
  render() {
    console.log("click", this.state.alpha);
    return (
      <div>
        <h4>
          Select an alphabet to display all the available characters with it.
        </h4>
        {this.state.alphaArr.map((value) => (
          <div className="alpha" onClick={(e) => this.handleClick(e, value)}>
            {value}
          </div>
        ))}
      </div>
    );
  }
}
