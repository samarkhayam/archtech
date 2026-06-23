export const currentUser = {
  id: 0,
  name: "Samar Khayam",
  handle: "@samk",
  initials: "SK",
  color: "bg-indigo-100 text-indigo-700",
  bio: "Software engineer · Mandi Bahauddin, PK",
  location: "Punjab, Pakistan",
  workplace: "Engineer @ TechCo",
  school: "UOR MBD",
  about: "Building things that matter. Coffee enthusiast. Open source contributor.",
  friends: 128,
};

export const USERS = [
  { id: 1, name: "Sara Raza",     handle: "@sara_r",  initials: "SR", color: "bg-emerald-100 text-emerald-700" },
  { id: 2, name: "Malik Usman",   handle: "@malikU",  initials: "MU", color: "bg-amber-100 text-amber-700" },
  { id: 3, name: "Zara Ahmed",    handle: "@zaraA",   initials: "ZA", color: "bg-rose-100 text-rose-700" },
  { id: 4, name: "Bilal Mirza",   handle: "@bilalm",  initials: "BM", color: "bg-violet-100 text-violet-700" },
  { id: 5, name: "Nida Farooq",   handle: "@nidaf",   initials: "NF", color: "bg-cyan-100 text-cyan-700" },
  { id: 6, name: "Omar Siddiqui", handle: "@omars",   initials: "OS", color: "bg-orange-100 text-orange-700" },
];

export const initialPosts = [
  {
    id: 1,
    user: USERS[0],
    time: "2h ago",
    text: "Just shipped a new feature to production! 🚀 The team worked incredibly hard on this one. Proud of what we built.",
    likes: 14,
    liked: false,
    comments: [
      { id: 101, user: USERS[1], text: "Congrats! That's amazing work." },
      { id: 102, user: USERS[3], text: "🔥 Keep it up Sara!" },
    ],
    media: null,
    visibility: "public",
  },
  {
    id: 2,
    user: USERS[1],
    time: "4h ago",
    text: "Lahore weather is absolutely perfect today. Best kind of day for coding outdoors ☀️",
    likes: 7,
    liked: false,
    comments: [],
    media: "photo",
    visibility: "public",
  },
  {
    id: 3,
    user: USERS[2],
    time: "Yesterday",
    text: 'Started reading "Designing Data-Intensive Applications" — highly recommend for every engineer. Chapter 3 on storage engines is mind-blowing.',
    likes: 22,
    liked: false,
    comments: [
      { id: 201, user: USERS[0], text: "One of my all-time favourites!" },
      { id: 202, user: USERS[3], text: "Great choice — want to do a reading group?" },
    ],
    media: null,
    visibility: "public",
  },
  {
    id: 4,
    user: USERS[3],
    time: "2 days ago",
    text: "Open source contribution milestone: 100 merged PRs across 3 repos 🎉 Shoutout to the community for the reviews.",
    likes: 41,
    liked: false,
    comments: [{ id: 301, user: USERS[2], text: "Incredible, Bilal! 💪" }],
    media: null,
    visibility: "public",
  },
];

export const initialNotifications = [
  { id: 1, icon: "heart",      color: "text-rose-500",   text: "Sara Raza liked your post",           time: "5m ago",  unread: true },
  { id: 2, icon: "user-plus",  color: "text-indigo-500", text: "Bilal Mirza sent you a friend request", time: "20m ago", unread: true },
  { id: 3, icon: "message",    color: "text-emerald-500",text: "Malik commented on your photo",        time: "1h ago",  unread: true },
  { id: 4, icon: "star",       color: "text-amber-500",  text: "Your post is trending in #Lahore",    time: "3h ago",  unread: false },
  { id: 5, icon: "users",      color: "text-violet-500", text: "Zara Ahmed accepted your request",    time: "Yesterday", unread: false },
];

export const initialFriendRequests = [
  { user: USERS[3], mutual: 3 },
  { user: USERS[4], mutual: 7 },
];

export const initialSuggestions = [
  { user: USERS[5], mutual: 4 },
  { user: { id: 7, name: "Hira Baig", handle: "@hirab", initials: "HB", color: "bg-pink-100 text-pink-700" }, mutual: 2 },
];

export const onlineUsers = [USERS[0], USERS[2]];

export const trending = [
  { tag: "#TechPakistan", posts: "2.4k" },
  { tag: "#AI2026",       posts: "18k" },
  { tag: "#Lahore",       posts: "5.1k" },
  { tag: "#OpenSource",   posts: "890" },
];

export const stories = [
  { user: currentUser, isOwn: true },
  { user: USERS[0] },
  { user: USERS[1] },
  { user: USERS[2] },
];
