import React, { useState } from "react";
import { postLogin } from "../service/api";
import jwt from "jwt-decode";
import Cookies from "js-cookie";

function LoginPage() {
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
        console.log(token)
        let decoded = jwt(token);
        console.log(decoded)

        Cookies.set("token", token);
    
      }
      console.log(response);
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
    <div>
      <form action="">
        username:
        <input type="text" name="username" onChange={usernameChange}></input>
        password:
        <input
          type="password"
          name="password"
          onChange={passwordChange}
        ></input>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
