import React from "react";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const Navbar = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" onClick={() => setProgress(100)}>
            News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/politics"
                  onClick={() => setProgress(100)}
                >
                  Politics
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/business"
                  onClick={() => setProgress(100)}
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/sports"
                  onClick={() => setProgress(100)}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/entertainment"
                  onClick={() => setProgress(100)}
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
};

export default Navbar;
