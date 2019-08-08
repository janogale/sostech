import React from "react";
import { Link } from "react-router-dom";

// get our fontawesome imports
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="container-full">
      <div className="columns">
        <div className="empty-space column is-12" />
      </div>
      <div className="columns">
        <div className="column has-text-centered">
          <h1 className="is-size-1 has-text-weight-bold">Welcome</h1>
        </div>
      </div>
      <div className="columns">
        <div className="column has-text-centered">
          <img width="120vw" src="./logo.png" alt="SOSTECH" />
        </div>
      </div>
      {/* form */}
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input is-medium"
                type="text"
                placeholder="johndoe@example.com"
                style={{ marginBottom: "1.5rem" }}
              />
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type="password"
                placeholder="password"
              />
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon={faEye} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <div className="field">
            <div className="control is-fullwidth">
              <button
                style={{ marginTop: "2rem" }}
                className="button is-medium is-fullwidth"
              >
                <Link to="/welcome">LOGIN</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="has-text-centered" style={{ marginTop: "2.5rem" }}>
        <p>
          Don't have account? <Link to="/singup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default App;
