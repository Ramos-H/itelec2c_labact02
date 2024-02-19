import { AdPost } from "./AdPost";
import { Post } from "./Post";
import { PostControls } from "./PostControls";
import { posts } from "./data";

export function MainStuff() {
  return (
    <div className="col-6">
      <PostControls />
      {/* Conditional Rendering */}
      {posts.map((post, idx) =>
        post.type === "ad" ? (
          <AdPost key={idx} {...post} />
        ) : (
          <Post key={idx} {...post} />
        ),
      )}
    </div>
  );
}
