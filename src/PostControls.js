export function PostControls() {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="row g-1">
          <div className="col-auto">
            <button className="btn-custom">
              <i className="bi bi-person-circle"></i>
            </button>
          </div>
          <div className="col">
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="row">
          <button className="col btn-custom btn-rounded">
            <i className="bi bi-question-square"></i> Ask
          </button>
          <button className="col btn-custom btn-rounded mx-2">
            <i className="bi bi-pencil-square"></i> Answer
          </button>
          <button className="col btn-custom btn-rounded">
            <i className="bi bi-pencil"></i> Post
          </button>
        </div>
      </div>
    </div>
  );
}
