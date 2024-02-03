export function TopicLink({ title, url, icon }) {
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
    </button>
  );
}
