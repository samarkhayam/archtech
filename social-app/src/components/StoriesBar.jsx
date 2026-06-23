import { useApp } from "../context/AppContext";
import { stories } from "../data/seed";

export default function StoriesBar() {
  const { currentUser } = useApp();

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
        {stories.map((s, i) => (
          <button key={i} className="flex flex-col items-center gap-1.5 flex-shrink-0 group">
            <div className={`p-0.5 rounded-full ${s.isOwn ? "bg-gray-200" : "bg-gradient-to-tr from-pink-500 via-violet-500 to-indigo-500"}`}>
              <div className="bg-white p-0.5 rounded-full">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm ${s.user.color}`}>
                  {s.isOwn ? <i className="fa-solid fa-plus"></i> : s.user.initials}
                </div>
              </div>
            </div>
            <span className="text-[11px] text-gray-500 group-hover:text-indigo-600 transition">
              {s.isOwn ? "Add story" : s.user.name.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
