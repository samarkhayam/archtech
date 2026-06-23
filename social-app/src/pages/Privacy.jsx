import { useState } from "react";

const defaultSettings = [
  { key: "posts",    label: "Who can see your posts",        icon: "fa-eye",          value: "Friends" },
  { key: "requests", label: "Who can send friend requests",  icon: "fa-user-plus",    value: "Everyone" },
  { key: "friends",  label: "Who can see your friends list", icon: "fa-user-group",   value: "Friends" },
  { key: "tags",     label: "Who can tag you in posts",      icon: "fa-tag",          value: "Friends" },
  { key: "messages", label: "Who can send you messages",     icon: "fa-envelope",     value: "Everyone" },
  { key: "search",   label: "Who can find you by search",    icon: "fa-magnifying-glass", value: "Everyone" },
];

const options = ["Everyone", "Friends", "Only me"];

export default function Privacy() {
  const [settings, setSettings] = useState(defaultSettings);
  const [saved, setSaved] = useState(false);

  function update(key, value) {
    setSettings((prev) => prev.map((s) => (s.key === key ? { ...s, value } : s)));
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-1">
          <h2 className="font-bold text-lg">Privacy settings</h2>
          {saved && (
            <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium"><i className="fa-solid fa-check mr-1"></i>Saved</span>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-6">Control who can see your content and interact with you.</p>

        <div className="flex flex-col gap-3">
          {settings.map((s) => (
            <div
              key={s.key}
              className="flex items-center gap-4 px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 transition"
            >
              <i className={`fa-solid ${s.icon} w-8 text-center text-gray-400`}></i>
              <p className="flex-1 text-sm text-gray-700">{s.label}</p>
              <select
                value={s.value}
                onChange={(e) => update(s.key, e.target.value)}
                className="px-3 py-1.5 rounded-xl text-sm border border-gray-200 bg-white outline-none cursor-pointer hover:border-indigo-300 focus:ring-2 focus:ring-indigo-200 transition text-gray-700"
              >
                {options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <button
          onClick={handleSave}
          className="mt-6 w-full py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Save changes
        </button>
      </div>

      {/* Two-factor */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="font-bold text-base mb-1">Account security</h2>
        <p className="text-sm text-gray-400 mb-4">Keep your account safe with additional verification.</p>
        <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-100">
          <div>
            <p className="text-sm font-medium text-gray-700">Two-factor authentication</p>
            <p className="text-xs text-gray-400">Add an extra layer of security</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-10 h-5 bg-gray-200 peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-5 peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all" />
          </label>
        </div>
      </div>
    </div>
  );
}
