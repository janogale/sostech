import React from "react";
import { Link } from "react-router-dom";

// get our fontawesome imports
import { faEye, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Singup() {
  return (
    <div className="container-full">
      <div className="columns">
        <div
          className="column has-text-centered"
          style={{ marginTop: "1.5rem" }}
        >
          <img width="80vw" src="./logo.png" alt="SOSTECH" />
        </div>
      </div>
      <div className="columns">
        <div className="column has-text-centered">
          <h1 className="is-size-3 has-text-weight-bold">Register</h1>
        </div>
      </div>

      {/* form */}
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type="text"
                placeholder="Username"
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type="text"
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type="password"
                placeholder="password"
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEye} />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type="password"
                placeholder="confirm password"
              />
              <span className="icon is-small is-left">
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
                className="button is-fullwidth"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="has-text-centered" style={{ marginTop: "2.5rem" }}>
        <p>
          Already a member? <Link to="/">Login Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Singup;
