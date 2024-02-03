export function Post({
  poster,
  occupation,
  title,
  content,
  imgUrl,
  upvotes,
  comments,
  shares,
}) {
  return (
    <div className="card mb-2 py-1">
      <div className="card-body">
        <div className="row">
          <div className="col-auto">
            <button className="btn btn-primary">
              <i className="bi bi-person-circle"></i>
            </button>
          </div>

          <div className="col text-start">
            <div className="row">
              <div>
                <strong>{poster} </strong>
                <a href="/">Follow</a>
              </div>
              <span className="text-secondary">{occupation}</span>
            </div>
          </div>

          <div className="col-auto">
            <button className="btn btn-custom">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        <div className="row text-start">
          <h6>{title}</h6>
          <p>{content}</p>
        </div>
      </div>

      <img src={imgUrl ?? "https://placehold.co/600x600"} alt="PostImage" />

      <div className="row">
        <div className="col-auto">
          {/* Upvote downvote */}
          <div
            className="btn-group me-1"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              defaultChecked={true}
            />
            <label
              className="btn btn-outline-secondary rounded-5 rounded-end"
              htmlFor="btnradio1"
            >
              <i className="bi bi-arrow-up"></i> Upvote . {upvotes}
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-secondary rounded-5 rounded-start"
              htmlFor="btnradio2"
            >
              <i className="bi bi-arrow-down"></i>
            </label>
          </div>

          <button className="btn btn-custom me-1">
            <i className="bi bi-chat"></i> {comments}
          </button>
          <button className="btn btn-custom">
            <i className="bi bi-arrow-repeat"></i> {shares}
          </button>
        </div>
        <div className="col d-flex justify-content-end">
          <button className="btn btn-custom">
            <i className="bi bi-three-dots"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
