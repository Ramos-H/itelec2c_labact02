import { TopicLink } from "./TopicLink";
import { otherLinks, topicLinks } from "./data";

export function SideNav() {
  return (
    <div className="col-3 d-flex flex-column">
      {topicLinks.map((topic, idx) => (
        <TopicLink
          key={idx}
          title={topic.title}
          url={topic.url}
          icon={topic.icon}
          isHot={topic.isHot}
          isNew={topic.isNew}
        />
      ))}
      <hr />
      {otherLinks.map((link, idx) => (
        <a href={link.url} className="text-secondary d-inline">
          {link.title}
        </a>
      ))}
    </div>
  );
}
