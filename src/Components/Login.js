import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { validateUser } from "../redux/Actions/Index";
class Login extends Component {
  state = {
    email: "",
    password: "",
    data: [],
    error: false,
    result: {},
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value, error: false });
  };
  handleClick = (e) => {
    e.preventDefault();
    let details = {
      emailId: this.state.email,
      password: this.state.password,
    };
    this.props.dispatch(validateUser(details));
  };
  // static getDerivedStateFromProps = (props, state) => {
  //   if (props.result !== state.result) {
  //     return { result: props.result };
  //   }
  // };
  componentDidUpdate = () => {
    console.log("Prop Result", this.props.result);
    if (this.props.result?.message === "Success") {
      this.props.history.push("/home");
    }
    if (this.props.result?.message === "Wrong Password") {
      if (this.state.error !== true) this.setState({ error: true });
    }
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

const mapStateToProps = (state) => {
  console.log(state.Validation.result);
  return { result: state.Validation.result };
};
export default connect(mapStateToProps)(Login);
