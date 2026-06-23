import { useState } from "react";
import { useApp } from "../context/AppContext";
import Avatar from "./Avatar";

function HeartIcon({ filled }) {
  return filled ? (
    <svg className="w-4 h-4 fill-rose-500 text-rose-500" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
  ) : (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
  );
}

export default function PostCard({ post }) {
  const { currentUser, toggleLike, addComment } = useApp();
  const [showComments, setShowComments] = useState(post.comments.length > 0);
  const [commentText, setCommentText] = useState("");
  const [showToast, setShowToast] = useState(false);

  function handleLike() {
    toggleLike(post.id);
  }

  function handleComment(e) {
    if (e.key === "Enter" && commentText.trim()) {
      addComment(post.id, commentText.trim());
      setCommentText("");
    }
  }

  function handleShare() {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }

  const visibilityLabel = { public: "🌍 Everyone", friends: "👥 Friends", "only-me": "🔒 Only me" };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 relative">
      {showToast && (
        <div className="absolute top-3 right-3 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full animate-bounce">
          <i className="fa-solid fa-link mr-1"></i> Link copied!
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <Avatar user={post.user} size="md" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-semibold text-sm">{post.user.name}</p>
            {post.visibility !== "public" && (
              <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                {visibilityLabel[post.visibility]}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400">{post.user.handle} · {post.time}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100" aria-label="Post options">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed text-gray-800 mb-3">{post.text}</p>

      {/* Media placeholder */}
      {post.media && (
        <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-gray-100 h-44 flex items-center justify-center mb-3">
          <div className="text-center text-gray-400">
            <i className={`fa-solid ${post.media === "photo" ? "fa-image" : "fa-video"} text-4xl mb-1`}></i>
            <p className="text-xs">{post.media === "photo" ? "Photo" : "Video"}</p>
          </div>
        </div>
      )}

      {/* Action bar */}
      <div className="flex items-center gap-1 pt-1 border-t border-gray-100">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm transition hover:bg-rose-50 ${
            post.liked ? "text-rose-500" : "text-gray-500 hover:text-rose-500"
          }`}
        >
          <HeartIcon filled={post.liked} />
          <span>{post.likes}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>{post.comments.length}</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>

      {/* Comments */}
      {showComments && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          {post.comments.map((c) => (
            <div key={c.id} className="flex gap-2 mb-2">
              <Avatar user={c.user} size="sm" />
              <div className="bg-gray-50 rounded-xl px-3 py-2 flex-1">
                <p className="text-xs font-semibold text-gray-700">{c.user.name}</p>
                <p className="text-sm text-gray-700">{c.text}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <Avatar user={currentUser} size="sm" />
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={handleComment}
              placeholder="Write a comment… (Enter to post)"
              className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300 transition"
            />
          </div>
        </div>
      )}
    </div>
  );
}
