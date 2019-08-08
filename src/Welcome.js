import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="container-full">
      <div className="columns">
        <div className="empty-space column is-12" />
      </div>
      <div className="columns">
        <div className="column has-text-centered">
          <img width="80vw" src="./logo.png" alt="SOSTECH" />
        </div>
      </div>
      <hr />
      {/* form */}
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <div className="has-text-centered">
            <h2 className="is-size-3">Welcome Joe Doe</h2>
            <h2 className="is-size-4">to</h2>
            <h3 className="is-size-5">
              {" "}
              <strong>SOSTECH</strong> Technology Day
            </h3>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="empty-space column is-12" />
      </div>
      <div className="has-text-centered" style={{ marginTop: "5rem" }}>
        <p>
          Want new account? <Link to="/singup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
