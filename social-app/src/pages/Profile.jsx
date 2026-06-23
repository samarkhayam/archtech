import { useApp } from "../context/AppContext";
import Avatar from "../components/Avatar";
import PostCard from "../components/PostCard";

export default function Profile() {
  const { currentUser, posts } = useApp();
  const myPosts = posts.filter((p) => p.user.id === currentUser.id || p.user.handle === currentUser.handle);

  return (
    <div className="flex flex-col gap-4">
      {/* Cover + info */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-600" />
        <div className="px-6 pb-5">
          <div className="flex items-end gap-4 -mt-10 mb-4">
            <div className="ring-4 ring-white rounded-full">
              <Avatar user={currentUser} size="xl" />
            </div>
            <div className="flex-1 min-w-0 mb-1">
              <h1 className="font-bold text-xl">{currentUser.name}</h1>
              <p className="text-sm text-gray-400">{currentUser.handle}</p>
            </div>
            <button className="px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 hover:bg-gray-50 transition mb-1">
              Edit profile
            </button>
          </div>

          <p className="text-sm text-gray-700 mb-4 leading-relaxed">{currentUser.about}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
            <span><i className="fa-solid fa-briefcase mr-1"></i>{currentUser.workplace}</span>
            <span><i className="fa-solid fa-graduation-cap mr-1"></i>{currentUser.school}</span>
            <span><i className="fa-solid fa-location-dot mr-1"></i>{currentUser.location}</span>
          </div>

          <div className="flex gap-6 text-sm">
            <div>
              <span className="font-bold text-gray-900 text-lg">{currentUser.friends}</span>
              <span className="text-gray-500 ml-1">friends</span>
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg">{posts.length}</span>
              <span className="text-gray-500 ml-1">posts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl border border-gray-200 px-4 py-2 flex gap-2">
        {["Posts", "Photos", "Videos", "About"].map((t, i) => (
          <button
            key={t}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              i === 0 ? "bg-indigo-50 text-indigo-700" : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Posts */}
      {myPosts.length > 0 ? (
        myPosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-400">
          <i className="fa-solid fa-pen-to-square text-4xl mb-2"></i>
          <p>No posts yet. Share something!</p>
        </div>
      )}
    </div>
  );
}
