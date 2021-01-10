import React, { useState, useEffect, useSelector } from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/Actions/Index";
function Register(props) {
  const [State, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    emailId: "",
    password: "",
    gender: "",
    description: "",
  });
  const [Error, setError] = useState([]);

  useEffect(() => {
    console.log("useEffect", props.result);
    if (props.result?.message === "Success") {
      props.history.push("/");
    }
  }, [props.result]);

  let handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    setState({ ...State, [e.target.name]: e.target.value });
    setError([]);
  };
  let handleClick = (e) => {
    e.preventDefault();
    let list = [];

    if (State.firstName.length < 3) {
      list.push("First name should contain at least 3 characters");
    }
    if (State.lastName.length < 3) {
      list.push("First name should contain at least 3 characters");
    }
    if (State.phoneNumber.length !== 10) {
      list.push("Enter correct phone number");
    }
    if (State.password.length < 7) {
      list.push("Password is too small");
    }
    // if (
    //   State.password.toLowerCase() === State.firstName.toLowerCase() ||
    //   State.password.toLowerCase() === State.lastName.toLowerCase()
    // ) {
    //   list.push("Cannot use First Name or Last Name as password.");
    // }

    if (list.length < 1) {
      list = [];
      setError([]);
      props.dispatch(addUser(State));
    } else {
      setError(list);
    }
  };

  return (
    <div className="form">
      <form>
        <fieldset>
          <legend>SignUp Here</legend>
          <div className="form-group">
            <label class="col-form-label">First Name</label>
            {Error.fName !== null ? null : <p>{Error.fName}</p>}
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              id="inputDefault"
              name="firstName"
              onChange={handleChange}
            ></input>
            <label class="col-form-label">Last Name</label>
            {Error.lName !== null ? <p>{Error.lName}</p> : null}
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              id="inputDefault"
              name="lastName"
              onChange={handleChange}
            ></input>
            <label class="col-form-label">Phone Number</label>
            {Error.phNum !== null ? <p>{Error.phNum}</p> : null}
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              id="inputDefault"
              name="phoneNumber"
              onChange={handleChange}
            ></input>
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Email ID"
              name="emailId"
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            {Error.pass !== null ? <p>{Error.pass}</p> : null}
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <fieldset className="form-group">
            <legend>Gender (Optional)</legend>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  value="male"
                  name="gender"
                  onChange={handleChange}
                />
                Male
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  value="female"
                  name="gender"
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  value="other"
                  name="gender"
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </fieldset>
          <div className="form-group">
            <label for="exampleTextarea">
              Tell us your favorite character. Why? (Optional)
            </label>
            <textarea
              class="form-control"
              id="exampleTextarea"
              rows="3"
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>
          {
            // Error.length > 0
            // ? Error.map((item) => (
            //     <div class="alert alert-dismissible alert-warning">
            //       <h4 class="alert-heading">Warning!</h4>
            //       <p class="mb-0">{item}</p>
            //     </div>
            //   ))
            // : null
          }
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={handleClick}
          >
            Submit your details
          </button>
        </fieldset>
      </form>
      {Error.length > 0
        ? Error.map((item) => (
            <div
              class="modal fade right"
              id="exampleModalPreview"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalPreviewLabel"
              aria-hidden="true"
            >
              <div
                class="modal-dialog modal-side modal-top-right"
                role="document"
              >
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalPreviewLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>{item}</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    result: state.User.result,
  };
}

export default connect(mapStateToProps)(Register);
