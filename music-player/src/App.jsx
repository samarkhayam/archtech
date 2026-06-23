import React, { useState, useRef, useEffect, useMemo } from 'react';
import './App.css';

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const audioRef = useRef(null);
  const currentSong = playlist[currentSongIndex] || null;

  // 1. Fetch live track streams on App mount
  useEffect(() => {
    const CLIENT_ID = ""; 
    const limit = 10; 
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=jsonpretty&limit=${limit}&include=musicinfo&order=popularity_total`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          const formattedTracks = data.results.map(track => ({
            id: track.id,
            title: track.name,
            artist: track.artist_name,
            category: track.musicinfo.genre || "General",
            src: track.audio,        
            cover: track.image       
          }));
          setPlaylist(formattedTracks);
        }
      })
      .catch(err => console.error("Error connecting to Jamendo API:", err));
  }, []);

  const categories = useMemo(() => {
    return ["All", ...new Set(playlist.map(song => song.category))];
  }, [playlist]);

  const filteredPlaylist = useMemo(() => {
    return playlist.filter(song => {
      const matchesCategory = selectedCategory === "All" || song.category === selectedCategory;
      const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            song.artist.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [playlist, selectedCategory, searchQuery]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (!audioRef.current || playlist.length === 0) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => console.log("Playback interrupted"));
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    if (playlist.length === 0) return;
    let nextIndex;
    if (shuffle) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * playlist.length);
      } while (randomIndex === currentSongIndex && playlist.length > 1);
      nextIndex = randomIndex;
    } else {
      nextIndex = (currentSongIndex + 1) % playlist.length;
    }
    setCurrentSongIndex(nextIndex);
  };

  const prevSong = () => {
    if (playlist.length === 0) return;
    let prevIndex;
    if (shuffle) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * playlist.length);
      } while (randomIndex === currentSongIndex && playlist.length > 1);
      prevIndex = randomIndex;
    } else {
      prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    }
    setCurrentSongIndex(prevIndex);
  };

  const handleSongEnd = () => {
    if (repeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => console.log("Playback failed"));
    } else {
      nextSong();
    }
  };

  const handleProgressChange = (e) => {
    if (!audioRef.current) return;
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    const newTime = (newProgress / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const dur = audioRef.current.duration || 0;
      setCurrentTime(current);
      setProgress(dur > 0 ? (current / dur) * 100 : 0);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const selectSongFromList = (songId) => {
    const targetIndex = playlist.findIndex(song => song.id === songId);
    if (targetIndex !== -1) {
      setCurrentSongIndex(targetIndex);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', handleSongEnd);
      
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleSongEnd);
      };
    }
  }, [playlist, currentSongIndex, repeat, shuffle]);

return (
    // Root viewport is strictly locked to screen height
    <div className="h-screen w-screen bg-gradient-to-br from-[#060b13] to-[#0f1123] flex items-center justify-center p-0 md:p-6 text-slate-100 overflow-hidden select-none">
      
      
      <div className="w-full h-full md:h-[80vh] md:max-h-[750px] md:min-h-[550px] md:max-w-4xl bg-slate-900/40 backdrop-blur-xl md:rounded-2xl shadow-2xl overflow-hidden border-0 md:border border-slate-800/60 flex flex-col">
        
        {/* Header Block with Search */}
        <div className="p-4 md:p-6 bg-slate-950/30 border-b border-slate-800/50 flex flex-row items-center justify-between gap-4 flex-shrink-0">
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center">
              <i className="fa-solid fa-music text-indigo-500 mr-2 text-base md:text-lg"></i> Music Center
            </h1>
            {/* <p className="hidden sm:block text-xs text-slate-400 mt-0.5">Samar's Music Player</p> */}
          </div>
          
          <div className="relative w-48 sm:w-64">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-500"></i>
            <input 
              type="text" 
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/50 border border-slate-800 rounded-full pl-9 pr-4 py-1.5 text-xs md:text-sm outline-none focus:border-indigo-500 transition-colors text-white"
            />
          </div>
        </div>

        {/* Categorization Filter Tabs */}
        <div className="px-4 md:px-6 py-2.5 bg-slate-950/10 flex gap-2 overflow-x-auto border-b border-slate-800/30 flex-shrink-0 no-scrollbar">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 md:px-4 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors whitespace-nowrap ${
                selectedCategory === category 
                  ? 'bg-indigo-500 text-white' 
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Main Workspace Split Layout */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          
          {/* Left Panel: Active Control Desk */}
          <div className="p-4 md:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-800/50 flex-shrink-0 md:flex-1">
            
            {/* Album Cover */}
            <div className="w-28 h-28 md:w-44 md:h-44 bg-gradient-to-tr from-slate-800 to-indigo-950 rounded-full flex items-center justify-center shadow-xl mb-3 md:mb-6 relative border border-slate-700/30 overflow-hidden flex-shrink-0">
              {currentSong?.cover ? (
                <img 
                  src={currentSong.cover} 
                  alt={currentSong.title} 
                  className={`w-full h-full object-cover ${isPlaying ? 'animate-spin [animation-duration:20s]' : ''}`} 
                />
              ) : (
                <div className="w-24 h-24 md:w-36 md:h-36 bg-slate-950/40 rounded-full flex items-center justify-center border border-dashed border-indigo-500/30">
                  <i className="fa-solid fa-compact-disc text-3xl md:text-5xl text-indigo-400/80"></i>
                </div>
              )}
            </div>
            
            {/* Track Info */}
            <div className="text-center mb-3 md:mb-6 max-w-xs px-2 flex-shrink-0">
              {currentSong ? (
                <>
                  <h2 className="text-base md:text-xl font-bold text-white truncate max-w-[240px] md:max-w-none">{currentSong.title}</h2>
                  <p className="text-xs md:text-sm text-slate-400 truncate mt-0.5">{currentSong.artist}</p>
                </>
              ) : (
                <p className="text-xs md:text-sm text-slate-500 italic">Loading track database...</p>
              )}
            </div>
            
            {/* Progress Slider */}
            <div className="w-full max-w-sm space-y-1 md:space-y-2 flex-shrink-0">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${progress}%, #1e293b ${progress}%, #1e293b 100%)` }}
              />
              <div className="flex justify-between text-[10px] md:text-xs font-mono text-slate-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-4 md:gap-5 mt-3 md:mt-5 flex-shrink-0">
              <button
                onClick={prevSong}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-800/60 hover:bg-slate-800 text-slate-200 flex items-center justify-center cursor-pointer transition-colors text-sm"
              >
                <i className="fa-solid fa-backward-step"></i>
              </button>
              <button
                onClick={togglePlay}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-indigo-500 hover:bg-indigo-600 shadow-lg shadow-indigo-500/20 flex items-center justify-center text-white text-base md:text-lg cursor-pointer transition-transform active:scale-95"
              >
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              </button>
              <button
                onClick={nextSong}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-800/60 hover:bg-slate-800 text-slate-200 flex items-center justify-center cursor-pointer transition-colors text-sm"
              >
                <i className="fa-solid fa-forward-step"></i>
              </button>
            </div>
            
            {/* Volume */}
            <div className="hidden sm:flex items-center gap-3 mt-4 md:mt-6 w-full max-w-xs px-4 flex-shrink-0">
              <i className="fa-solid fa-volume-low text-xs text-slate-500"></i>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${volume * 100}%, #1e293b ${volume * 100}%, #1e293b 100%)` }}
              />
              <i className="fa-solid fa-volume-high text-xs text-slate-500"></i>
            </div>
            
            {/* Shuffle & Repeat */}
            <div className="flex gap-2.5 mt-4 md:mt-5 flex-shrink-0">
              <button
                onClick={() => { setShuffle(!shuffle); if(!shuffle) setRepeat(false); }}
                className={`px-2.5 py-1.5 rounded-md text-[11px] md:text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5 ${
                  shuffle ? "bg-indigo-500 text-white" : "bg-slate-800/40 text-slate-400 hover:bg-slate-800/80"
                }`}
              >
                <i className="fa-solid fa-shuffle"></i> Shuffle
              </button>
              <button
                onClick={() => { setRepeat(!repeat); if(!repeat) setShuffle(false); }}
                className={`px-2.5 py-1.5 rounded-md text-[11px] md:text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5 ${
                  repeat ? "bg-indigo-500 text-white" : "bg-slate-800/40 text-slate-400 hover:bg-slate-800/80"
                }`}
              >
                <i className="fa-solid fa-rotate-right"></i> Repeat
              </button>
            </div>
          </div>
          
          {/* Right Panel: Active Playlist Track Queue Layout */}
          {/* Changed 'w-full' to 'h-full md:w-80' and layout styling to fit perfectly inside desktop limits */}
          <div className="w-full md:w-80 bg-slate-950/20 p-4 md:p-6 flex flex-col flex-1 h-full overflow-hidden">
            <h3 className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex-shrink-0">
              <i className="fa-solid fa-list-ul mr-1.5"></i> Queue ({filteredPlaylist.length})
            </h3>
            
            {/* Scroll container captures everything cleanly */}
            <div className="space-y-1 flex-1 overflow-y-auto custom-scrollbar pr-1 get-smooth-scroll">
              {filteredPlaylist.length > 0 ? (
                filteredPlaylist.map((song) => {
                  const isSelected = currentSong && currentSong.id === song.id;
                  return (
                    <div
                      key={song.id}
                      onClick={() => selectSongFromList(song.id)}
                      className={`p-2 rounded-lg cursor-pointer transition-all border flex justify-between items-center ${
                        isSelected
                          ? "bg-indigo-500/10 border-indigo-500/40"
                          : "bg-transparent border-transparent hover:bg-slate-800/30"
                      }`}
                    >
                      <div className="truncate pr-2 flex items-center gap-2.5">
                        {song.cover && (
                          <img src={song.cover} alt="" className="w-7 h-7 rounded object-cover flex-shrink-0 bg-slate-800" />
                        )}
                        <div className="truncate">
                          <p className={`font-medium text-xs md:text-sm truncate ${isSelected ? "text-indigo-400" : "text-white"}`}>
                            {song.title}
                          </p>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">{song.artist}</p>
                        </div>
                      </div>
                      
                      {isSelected ? (
                        <i className="fa-solid fa-wave-square text-indigo-400 text-xs animate-pulse flex-shrink-0"></i>
                      ) : (
                        <span className="text-[9px] bg-slate-800/50 text-slate-400 px-1.5 py-0.5 rounded-md flex-shrink-0">
                          {song.category}
                        </span>
                      )}
                    </div>
                  );
                })
              ) : (
                <p className="text-xs text-slate-500 text-center py-6">No matching songs found.</p>
              )}
            </div>
          </div>

        </div>
        
        {/* Hidden Audio Context Node */}
        <audio ref={audioRef} src={currentSong?.src} preload="metadata" />
      </div>
    </div>
  );
};

export default App;