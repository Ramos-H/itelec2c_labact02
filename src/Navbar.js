export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1920px-Quora_logo_2015.svg.png?20170609154433"
            alt="quora logo"
            className="img-fluid"
            width={100}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
              style={{ color: "rgb(185, 43, 39)" }}
            >
              <i className="bi bi-house-door-fill"></i>
            </a>
            <a className="nav-link" href="#">
              <i className="bi bi-card-list"></i>
            </a>
            <a className="nav-link" href="#">
              <i className="bi bi-pencil-square"></i>
            </a>
            <a className="nav-link" href="#">
              <i className="bi bi-people"></i>
            </a>
            <a className="nav-link" href="#">
              <i className="bi bi-bell-fill"></i>
            </a>
          </div>

          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Quora"
                aria-label="Search"
              />
            </form>
          </div>

          <div className="container-fluid">
            <button className="btn btn-outline-secondary rounded-pill">
              Try Quora+
            </button>
            <button className="btn-custom ">
              <i className="bi bi-person-circle"></i>
            </button>
            <button className="btn-custom ">
              <i className="bi bi-globe"></i>
            </button>
            <div
              className="btn-group"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button type="button" className="btn custom-danger text-white">
                Add question
              </button>

              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn custom-danger text-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Create Post
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
