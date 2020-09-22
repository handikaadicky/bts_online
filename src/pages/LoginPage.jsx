import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postLogin } from "../service/api";
import jwt from "jwt-decode";
import Cookies from "js-cookie";

function LoginPage() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = {
      username,
      password,
    };

    try {
      const response = await postLogin(data);
      if (response.status === 200) {
        const token = response.data.data.token;
        console.log(token);
        let decoded = jwt(token);
        console.log(decoded);
        Cookies.set("token", token);
        history.push("/lists");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const usernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  const passwordChange = (evt) => {
    setPassword(evt.target.value);
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 class="display-4">Welcome to To-do App</h1>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            onChange={usernameChange}
          ></input>
        </div>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          onChange={passwordChange}
        ></input>
        <br/>
        <button type="button" class="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
