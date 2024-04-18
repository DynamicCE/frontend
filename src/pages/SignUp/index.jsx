import { useState } from "react";
import axios from "axios";
import { signUp } from "./api";

export function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const onSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage();
    setApiProgress(true);
    signUp({ username, email, password })
      .then((response) => {
        setSuccessMessage(response.data.message);
      })
      .finally(() => {
        setApiProgress(false);
      });
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3">
        {" "}
        <form onSubmit={onSubmit} className="card">
          <div className="text-center card-header">
            <h1>Sign Up</h1>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                id="username"
                onChange={onChangeUsername}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordRepeat" className="form-label">
                Password Repeat
              </label>
              <input
                type="password"
                id="passwordRepeat"
                className="form-control"
                onChange={(event) => {
                  setPasswordRepeat(event.target.value);
                }}
              />
            </div>
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            <div className="text-center">
              <button
                disabled={
                  apiProgress || !password || password !== passwordRepeat
                }
                className="btn btn-outline-primary"
              >
                {apiProgress && (
                  <span
                    class="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
