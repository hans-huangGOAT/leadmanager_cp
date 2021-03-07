import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-4">
        <h2>Register</h2>
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username..."
              name="username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email..."
              name="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password..."
              name="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password..."
              name="password2"
              value={password2}
              onChange={(e) =>
                setPassword2(e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-sm btn-primary"
            >
              Submit
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
