import { useState } from "react";

export function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <div>
        {" "}
        <label htmlFor="username">Username</label>
        <input id="username" onChange={onChangeUsername} />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="passwordRepeat">Password Repeat</label>
        <input
          type="password"
          id="passwordRepeat"
          onChange={(event) => {
            setPasswordRepeat(event.target.value);
          }}
        />
      </div>
      <button disabled={!password || password !== passwordRepeat}>
        Sign Up
      </button>
    </>
  );
}
