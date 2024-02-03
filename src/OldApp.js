import { Card } from "./Card";

export function OldApp() {
  return (
    <>
      <main>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <div className="col-auto">
              <div className="row">
                <div className="col-auto">
                  <a>Navbar</a>
                </div>

                <div className="col">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 d-flex mx-auto px-5">
              <button className="btn btn-primary flex-fill">Test</button>
              <button className="btn btn-primary flex-fill">Test</button>
              <button className="btn btn-primary flex-fill">Test</button>
              <button className="btn btn-primary flex-fill">Test</button>
              <button className="btn btn-primary flex-fill">Test</button>
            </div>

            <div className="col d-flex justify-content-end">
              <button className="btn btn-secondary">Test</button>
              <button className="btn btn-secondary">Test</button>
              <button className="btn btn-secondary">Test</button>
              <button className="btn btn-secondary">Test</button>
            </div>
          </div>
        </nav>

        <div className="row">
          {/* Side nav */}
          <nav className="nav flex-column col-2 text-start">
            <a className="nav-link active" aria-current="page" href="#">
              Active
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </nav>

          {/* List */}
          <div id="post-list" className="col px-5">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="col-2">
            <p>Birthdays</p>
            <p>Contacts</p>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
