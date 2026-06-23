import { useState } from "react";
import { AppContext } from "./context/AppContext";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Friends from "./pages/Friends";
import Privacy from "./pages/Privacy";
import { initialPosts, initialNotifications, initialFriendRequests, initialSuggestions, currentUser } from "./data/seed";

export default function App() {
  const [tab, setTab] = useState("feed");
  const [posts, setPosts] = useState(initialPosts);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [friendRequests, setFriendRequests] = useState(initialFriendRequests);
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const unreadNotifs = notifications.filter((n) => n.unread).length;
  const pendingRequests = friendRequests.length;

  function addPost(post) {
    setPosts((prev) => [post, ...prev]);
    setTimeout(() => {
      setNotifications((prev) => [
        {
          id: Date.now(),
          icon: "heart",
          color: "text-rose-500",
          text: "Sara Raza liked your new post",
          time: "Just now",
          unread: true,
        },
        ...prev,
      ]);
    }, 2500);
  }

  function toggleLike(postId) {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
  }

  function addComment(postId, text) {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, comments: [...p.comments, { id: Date.now(), user: currentUser, text }] }
          : p
      )
    );
  }

  function markNotifsRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  }

  function acceptRequest(userId) {
    setFriendRequests((prev) => prev.filter((r) => r.user.id !== userId));
  }

  function declineRequest(userId) {
    setFriendRequests((prev) => prev.filter((r) => r.user.id !== userId));
  }

  function sendRequest(userId) {
    setSuggestions((prev) => prev.filter((s) => s.user.id !== userId));
  }

  const ctx = {
    currentUser,
    tab, setTab,
    posts, addPost, toggleLike, addComment,
    notifications, markNotifsRead, unreadNotifs,
    friendRequests, acceptRequest, declineRequest, pendingRequests,
    suggestions, sendRequest,
    mobileMenuOpen, setMobileMenuOpen,
  };

  const pages = { feed: Feed, profile: Profile, notifications: Notifications, friends: Friends, privacy: Privacy };
  const Page = pages[tab] || Feed;

  return (
    <AppContext.Provider value={ctx}>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Topbar />
        <div className="max-w-6xl mx-auto px-4 pt-4 pb-10 flex gap-6">
          <Sidebar />
          <main className="flex-1 min-w-0">
            <Page />
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}
