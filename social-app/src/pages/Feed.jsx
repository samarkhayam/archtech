import { useApp } from "../context/AppContext";
import ComposePost from "../components/ComposePost";
import PostCard from "../components/PostCard";
import StoriesBar from "../components/StoriesBar";

export default function Feed() {
  const { posts } = useApp();

  return (
    <div className="flex flex-col gap-4">
      <StoriesBar />
      <ComposePost />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
