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
        email
        <input type="email" name="password" onChange={emailChange}></input>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default RegisterScreen;
