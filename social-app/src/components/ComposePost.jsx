import { useState } from "react";
import { useApp } from "../context/AppContext";
import Avatar from "./Avatar";

export default function ComposePost() {
  const { currentUser, addPost } = useApp();
  const [text, setText] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [media, setMedia] = useState(null);
  const [toast, setToast] = useState(false);

  function handlePost() {
    if (!text.trim()) return;
    addPost({
      id: Date.now(),
      user: currentUser,
      time: "Just now",
      text: text.trim(),
      likes: 0,
      liked: false,
      comments: [],
      media,
      visibility,
    });
    setText("");
    setMedia(null);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 relative">
      {toast && (
        <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full">
          <i className="fa-solid fa-check mr-1"></i> Posted!
        </div>
      )}
      <div className="flex gap-3">
        <Avatar user={currentUser} size="md" />
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={`What's on your mind, ${currentUser.name.split(" ")[0]}?`}
            rows={3}
            className="w-full bg-gray-50 rounded-xl px-4 py-3 text-sm resize-none outline-none focus:ring-2 focus:ring-indigo-300 transition placeholder-gray-400"
          />

          {media && (
            <div className="mt-2 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-gray-100 h-24 flex items-center justify-center relative">
              <div className="text-center text-gray-400">
                <i className={`fa-solid ${media === "photo" ? "fa-image" : "fa-video"} text-3xl mb-1`}></i>
                <p className="text-xs">{media === "photo" ? "Photo attached" : "Video attached"}</p>
              </div>
              <button
                onClick={() => setMedia(null)}
                className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-gray-500 hover:text-rose-500 border border-gray-200 text-xs"
              >
                ✕
              </button>
            </div>
          )}

          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <button
              onClick={() => setMedia("photo")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200 transition"
            >
              <i className="fa-solid fa-image"></i> Photo
            </button>
            <button
              onClick={() => setMedia("video")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200 transition"
            >
              <i className="fa-solid fa-video"></i> Video
            </button>
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="px-3 py-1.5 rounded-xl text-sm text-gray-600 border border-gray-200 bg-white outline-none cursor-pointer hover:border-indigo-300 transition"
            >
              <option value="public">🌍 Everyone</option>
              <option value="friends">👥 Friends</option>
              <option value="only-me">🔒 Only me</option>
            </select>
            <button
              onClick={handlePost}
              disabled={!text.trim()}
              className="ml-auto px-5 py-1.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
