import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    data: [],
    error: false,
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: [e.target.value] });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push();
    // let myHeader = new Headers();
    // let api = "";
    // let myBody = {email: this.state.email, password: this.state.password};
    // myHeader.append("Content-Type", "application/json");
    // fetch(api, {
    //   method: "POST",
    //  body: myBody,
    //   headers: myHeader,
    // })
    //   .then((result) => result.json())
    //   .then((dbData) =>
    //     dbData.email.toLowerCase() === this.state.email.toLowerCase()
    //       ? dbData.password === this.state.password
    //         ? this.setState({ error: false })
    //         : this.setState({ error: true })
    //       : this.setsState({ error: true })
    //   )
    //   .catch((error) => console.log(error));
  };
  render() {
    return (
      <div className="form">
        <form>
          <fieldset>
            <div className="form-group">
              <legend>Login Here</legend>
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Email ID"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </fieldset>
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={this.handleClick}
          >
            Login
          </button>
          <small id="emailHelp" className="form-text text-muted">
            New user? SignUp here.
          </small>
        </form>
      </div>
    );
  }
}
