import { useEffect } from "react";
import { useApp } from "../context/AppContext";

const iconMap = {
  heart:       <i className="fa-solid fa-heart text-rose-500"></i>,
  "user-plus": <i className="fa-solid fa-user-plus text-indigo-500"></i>,
  message:     <i className="fa-solid fa-message text-emerald-500"></i>,
  star:        <i className="fa-solid fa-star text-amber-500"></i>,
  users:       <i className="fa-solid fa-users text-violet-500"></i>,
};

export default function Notifications() {
  const { notifications, markNotifsRead } = useApp();

  useEffect(() => {
    markNotifsRead();
  }, []);

  const unread = notifications.filter((n) => n.unread);
  const read = notifications.filter((n) => !n.unread);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="font-bold text-lg mb-1">Notifications</h2>
        <p className="text-sm text-gray-400 mb-5">Stay up to date with your social activity.</p>

        {unread.length > 0 && (
          <div className="mb-5">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">New</p>
            <div className="flex flex-col gap-1">
              {unread.map((n) => (
                <NotifRow key={n.id} notif={n} />
              ))}
            </div>
          </div>
        )}

        {read.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Earlier</p>
            <div className="flex flex-col gap-1">
              {read.map((n) => (
                <NotifRow key={n.id} notif={n} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NotifRow({ notif }) {
  return (
    <div
      className={`flex items-start gap-3 px-4 py-3 rounded-xl cursor-pointer transition hover:bg-gray-50 ${
        notif.unread ? "bg-indigo-50/50" : ""
      }`}
    >
      <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg flex-shrink-0">
        {iconMap[notif.icon] || <i className="fa-solid fa-bell"></i>}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-800">{notif.text}</p>
        <p className="text-xs text-gray-400 mt-0.5">{notif.time}</p>
      </div>
      {notif.unread && (
        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
      )}
    </div>
  );
}
