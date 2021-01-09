import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  state = {
    email: "",
    password: "",
    data: [],
    error: false,
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value, error: false });
  };
  handleClick = (e) => {
    e.preventDefault();
    let myHeader = new Headers();
    let api = "http://localhost:5000/validateUser";
    let myBody = { emailId: this.state.email, password: this.state.password };
    myHeader.append("Content-Type", "application/json");
    fetch(api, {
      method: "POST",
      body: JSON.stringify(myBody),
      headers: myHeader,
    })
      .then((result) => result.json())
      .then((dbData) =>
        dbData.message === "Success"
          ? this.props.history.push("/home")
          : this.setState({ error: true })
      )
      .catch((error) => console.log(error));
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
          {this.state.error ? <p>Wrong Password</p> : ""}
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={this.handleClick}
          >
            Login
          </button>
          <small id="emailHelp" className="form-text text-muted">
            <Link to="/register">New user? SignUp here.</Link>
          </small>
        </form>
      </div>
    );
  }
}
