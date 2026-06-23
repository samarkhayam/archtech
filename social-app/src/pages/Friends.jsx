import { useApp } from "../context/AppContext";
import Avatar from "../components/Avatar";

export default function Friends() {
  const { friendRequests, acceptRequest, declineRequest, suggestions, sendRequest } = useApp();

  return (
    <div className="flex flex-col gap-4">
      {/* Requests */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="font-bold text-lg mb-1">Friend requests</h2>
        <p className="text-sm text-gray-400 mb-5">People who want to connect with you.</p>

        {friendRequests.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <i className="fa-solid fa-hands-clapping text-4xl mb-2"></i>
            <p className="text-sm">You're all caught up!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-3">
            {friendRequests.map((req) => (
              <div key={req.user.id} className="border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-3 text-center">
                <Avatar user={req.user} size="lg" />
                <div>
                  <p className="font-semibold text-sm">{req.user.name}</p>
                  <p className="text-xs text-gray-400">{req.mutual} mutual friends</p>
                </div>
                <div className="flex gap-2 w-full">
                  <button
                    onClick={() => acceptRequest(req.user.id)}
                    className="flex-1 py-1.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => declineRequest(req.user.id)}
                    className="flex-1 py-1.5 rounded-xl text-sm font-medium border border-gray-200 hover:bg-gray-50 transition"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Suggestions */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="font-bold text-lg mb-1">People you may know</h2>
        <p className="text-sm text-gray-400 mb-5">Based on your mutual connections.</p>

        {suggestions.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-4">No suggestions right now.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-3">
            {suggestions.map((sug) => (
              <div key={sug.user.id} className="border border-gray-100 rounded-xl p-4 flex items-center gap-3">
                <Avatar user={sug.user} size="md" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{sug.user.name}</p>
                  <p className="text-xs text-gray-400">{sug.mutual} mutual friends</p>
                </div>
                <button
                  onClick={() => sendRequest(sug.user.id)}
                  className="px-3 py-1.5 rounded-xl text-sm font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition flex-shrink-0"
                >
                  + Add
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
