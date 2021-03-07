import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Header = ({ auth, logout }) => {
  const guestLink = (
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  const authLink = (
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <span className="nav-item">
        <strong>
          {auth.user
            ? `Welcome ${auth.user.username}`
            : ""}
        </strong>
      </span>
      <li className="nav-item">
        <button
          className="btn btn-sm btn-info"
          onClick={logout}
        >
          Logout
        </button>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarTogglerDemo01"
        >
          <a className="navbar-brand" href="#">
            Lead Manager
          </a>
          {auth.isAuthenticated
            ? authLink
            : guestLink}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logout,
})(Header);
