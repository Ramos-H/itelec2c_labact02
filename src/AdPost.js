export function AdPost({ poster, title, content, imgUrl }) {
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
              <strong>{poster} </strong>
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
    </div>
  );
}
