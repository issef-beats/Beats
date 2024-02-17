import React, { useState } from 'react';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Implement play/pause functionality
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
    setDuration(e.target.duration);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    // Implement seek functionality
  };

  return (
    <div className="bg-black p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-2">
        <button className="text-white text-2xl" onClick={togglePlay}>
          {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
        </button>
        <div className="w-full ml-4">
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full bg-gray-300 h-2 rounded-full focus:outline-none appearance-none"
          />
        </div>
      </div>
      <div className="text-xs text-gray-500 flex justify-between w-full">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

export default MusicPlayer;
