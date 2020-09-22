import React, { useState } from "react";
import { postRegister } from "../service/api";

function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    const data = {
      username,
      password,
      email,
    };
    postRegister(data);
  };

  const usernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  const passwordChange = (evt) => {
    setPassword(evt.target.value);
  };
  const emailChange = (evt) => {
    setEmail(evt.target.value);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 class="display-4">Don't leave, register here!</h1>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            id="username"
            type="text"
            name="username"
            onChange={usernameChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            id="username"
            type="password"
            name="password"
            onChange={passwordChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="password"
            onChange={emailChange}
          ></input>
          <br></br>
          <button type="button" class="btn btn-primary" onClick={handleRegister}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;
