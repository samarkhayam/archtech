import { useApp } from "../context/AppContext";
import Avatar from "./Avatar";

export default function Topbar() {
  const { currentUser, unreadNotifs, pendingRequests, setTab, mobileMenuOpen, setMobileMenuOpen } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
        <button
          className="text-indigo-600 font-bold text-xl tracking-tight flex-shrink-0"
          onClick={() => setTab("feed")}
        >
          SocialConnect
        </button>

        <div className="flex-1 max-w-xs hidden sm:block">
          <input
            type="text"
            placeholder="Search people, posts…"
            className="w-full bg-gray-100 rounded-full px-4 py-1.5 text-sm outline-none focus:ring-2 focus:ring-indigo-300 transition"
          />
        </div>

        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {[
            { id: "feed",          label: "Home",          icon: "fa-house" },
            { id: "friends",       label: "Friends",       icon: "fa-user-group", badge: pendingRequests },
            { id: "notifications", label: "Notifications", icon: "fa-bell", badge: unreadNotifs },
            { id: "profile",       label: "Profile",       icon: "fa-user" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className="relative px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              <i className={`fa-solid ${item.icon} mr-1`}></i>
              {item.label}
              {item.badge > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="ml-auto md:ml-2 flex items-center gap-2">
          <Avatar user={currentUser} size="sm" />
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-2 flex gap-2 flex-wrap">
          {[
            { id: "feed", label: "Home" },
            { id: "friends", label: "Friends", badge: pendingRequests },
            { id: "notifications", label: "Notifs", badge: unreadNotifs },
            { id: "profile", label: "Profile" },
            { id: "privacy", label: "Privacy" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { setTab(item.id); setMobileMenuOpen(false); }}
              className="relative px-3 py-1.5 rounded-full text-sm bg-gray-100 hover:bg-indigo-100 hover:text-indigo-700 transition"
            >
              {item.label}
              {item.badge > 0 && (
                <span className="ml-1 bg-rose-500 text-white text-[10px] rounded-full px-1 py-0.5">{item.badge}</span>
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
