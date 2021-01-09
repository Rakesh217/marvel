import React, { useState } from "react";

export default function Register(props) {
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
      list.push("first name.");
    }
    if (State.lastName.length < 3) {
      list.push("lastname.");
    }
    if (State.phoneNumber.length !== 10) {
      list.push("phone number");
    }
    if (State.password.length < 7) {
      list.push("password");
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
      let myHeader = new Headers();
      let api = "http://localhost:5000/addUser";
      let myBody = State;
      myHeader.append("Content-Type", "application/json");
      fetch(api, {
        method: "POST",
        body: JSON.stringify(myBody),
        headers: myHeader,
      }).catch((error) => console.log(error));
      props.history.push("/");
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
          {Error.length > 0 ? Error.map((item) => <p> {item}</p>) : null}
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
