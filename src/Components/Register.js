import React, { useState } from "react";

export default function Register() {
  const [State, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    emailId: "",
    password: "",
    gender: "",
    description: "",
  });
  let handleChange = (e) => {
    e.preventDefault();
    setState({ ...State, [e.target.name]: [e.target.value] });
  };
  let handleClick = (e) => {
    e.preventDefault();
    // let myHeader = new Headers();
    // let api = "";
    // let myBody = State;
    // myHeader.append("Content-Type", "application/json");
    // fetch(api, {
    //   method: "POST",
    //   body: JSON.stringify(myBody),
    //   headers: myHeader,
    // }).catch((error) => console.log(error));
  };
  return (
    <div className="form">
      <form>
        <fieldset>
          <legend>SignUp Here</legend>
          <div className="form-group">
            <label class="col-form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              id="inputDefault"
              name="firstName"
              onChange={handleChange}
            ></input>
            <label class="col-form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              id="inputDefault"
              name="lastName"
              onChange={handleChange}
            ></input>
            <label class="col-form-label">Phone Number</label>
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
            <legend>Gender</legend>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios2"
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
                  name="optionsRadios"
                  id="optionsRadios2"
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
                  name="optionsRadios"
                  id="optionsRadios2"
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
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={handleClick}
          >
            Submit your details
          </button>
        </fieldset>
      </form>
    </div>
  );
}
