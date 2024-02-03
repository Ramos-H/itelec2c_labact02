export function Card() {
  return (
    <div className="row justify-content-center">
      <div className="col-auto card mb-3">
        <div className="card-body">
          {/* Header */}
          <div className="row">
            <div className="col text-start">
              <img
                src="https://placehold.co/30x30"
                alt="Profile image here"
                className="img-fluid d-inline"
              />
              <p className="fw-bold mb-0">Post name</p>
              <p className="text-secondary mb-0">Time</p>
            </div>
            <div className="col-auto">x button</div>
          </div>

          <img
            src="https://placehold.co/600x600"
            alt="Post image here"
            className="img-fluid"
          />
          <div className="row">
            <div className="col text-start">Likes and stuff</div>
            <div className="col-auto">
              <a className="me-1">Comments</a>
              <a>Shares</a>
            </div>
          </div>
        </div>

        <div className="card-footer d-flex">
          <div className="btn btn-primary flex-fill">Like</div>
          <div className="btn btn-primary flex-fill mx-1">Comment</div>
          <div className="btn btn-primary flex-fill">Share</div>
        </div>
      </div>
    </div>
  );
}
