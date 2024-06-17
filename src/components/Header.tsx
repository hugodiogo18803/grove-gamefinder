// Make a header component which contains the following:
// An icon button which takes the user to the home page, which also has the title “The Grove”.
// A dropdown list of categories
// A search bar to find games by name
// A wishlists button which takes the user to the wishlists page
// A login and sign up button which takes the user to the login page

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          The Grove
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlists">
                Wishlists
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login/Sign Up
              </Link>
            </li>
          </ul>
          <form className="form-inline ml-auto">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
