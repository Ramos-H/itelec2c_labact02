export function TopicLink({ title, url, icon, isHot, isNew }) {
  return (
    <button className="btn-custom mb-2 text-start">
      <img
        src={icon ?? "https://placehold.co/30x30"}
        alt="icon"
        className="me-1 img-fluid"
        width={30}
      />
      <a
        href={url}
        className="text-secondary link-underline link-underline-opacity-0"
      >
        {title}
      </a>

      {/* Conditional Rendering */}
      <span
        className={`badge ms-1 ${isHot && !isNew && "bg-danger"} ${isNew && !isHot && "bg-warning"} ${isHot && isNew && "bg-success"}`}
      >
        {isHot && !isNew && "HOT"}
        {isNew && !isHot && "NEW"}
        {isHot && isNew && "TRENDING"}
      </span>
    </button>
  );
}
