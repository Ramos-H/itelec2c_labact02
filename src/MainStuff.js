import { Post } from "./Post";
import { PostControls } from "./PostControls";
import { posts } from "./data";

export function MainStuff() {
  return (
    <div className="col-6">
      <PostControls />
      {posts.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </div>
  );
}
