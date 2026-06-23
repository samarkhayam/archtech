import { useApp } from "../context/AppContext";
import Avatar from "./Avatar";
import { onlineUsers, trending } from "../data/seed";

export default function Sidebar() {
  const { currentUser, tab, setTab, unreadNotifs, pendingRequests } = useApp();

  const navItems = [
    { id: "feed",          label: "Home",          icon: "fa-house" },
    { id: "notifications", label: "Notifications", icon: "fa-bell",       badge: unreadNotifs },
    { id: "friends",       label: "Friends",       icon: "fa-user-group", badge: pendingRequests },
    { id: "profile",       label: "Profile",       icon: "fa-user" },
    { id: "privacy",       label: "Privacy",       icon: "fa-lock" },
  ];

  return (
    <aside className="hidden lg:flex flex-col gap-4 w-56 flex-shrink-0">
      {/* Profile card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col items-center gap-3 text-center">
        <Avatar user={currentUser} size="lg" />
        <div>
          <p className="font-semibold text-sm">{currentUser.name}</p>
          <p className="text-xs text-gray-400">{currentUser.handle}</p>
        </div>
        <div className="flex gap-4 text-xs text-gray-500">
          <div className="text-center">
            <div className="font-semibold text-gray-900 text-base">128</div>
            friends
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 text-base">4</div>
            posts
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-white rounded-2xl border border-gray-200 p-2 flex flex-col gap-0.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition text-left w-full ${
              tab === item.id
                ? "bg-indigo-50 text-indigo-700"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <i className={`fa-solid ${item.icon} w-4 text-center`}></i>
            <span className="flex-1">{item.label}</span>
            {item.badge > 0 && (
              <span className="bg-rose-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Online friends */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Online now</p>
        <div className="flex flex-col gap-2">
          {onlineUsers.map((u) => (
            <div key={u.id} className="flex items-center gap-2">
              <div className="relative">
                <Avatar user={u} size="sm" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
              </div>
              <span className="text-sm text-gray-700">{u.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Trending</p>
        <div className="flex flex-col gap-2">
          {trending.map((t) => (
            <div key={t.tag} className="cursor-pointer hover:text-indigo-600 transition">
              <p className="text-sm font-medium">{t.tag}</p>
              <p className="text-xs text-gray-400">{t.posts} posts</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
