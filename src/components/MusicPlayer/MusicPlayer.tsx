import React, { useState, useRef, useEffect, useCallback } from 'react';
import './MusicPlayer.css';
import { IoMdClose, IoIosMusicalNotes, IoIosInformationCircle } from "react-icons/io";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

// --- Royalty-Free Music Files ---
import chill from '../../assets/music/Kevin Macleod - Chill.mp3';
import deliberateThought from '../../assets/music/Kevin Macleod - Deliberate Thought.mp3';
import floatingCat from '../../assets/music/Floating Cat  -  Michael Grubb.mp3';
import inspired from '../../assets/music/Kevin Macleod - Inspired.mp3';
import donkeyFeet from '../../assets/music/Power Druid - Donkey Feet.mp3';
import downSide from '../../assets/music/Daniel Fridell, Sven Lindvall - Down Side.mp3';
import interplanetary from '../../assets/music/Scoobadive - Interplanetary.mp3';

// The royalty-free playlist
const playlist = [
  { name: 'Kevin Macleod - Chill', src: chill },
  { name: 'Kevin Macleod - Deliberate Thought', src: deliberateThought },
  { name: 'Michael Grubb - Floating Cat', src: floatingCat },
  { name: 'Kevin Macleod - Inspired', src: inspired },
  { name: 'Power Druid - Donkey Feet', src: donkeyFeet },
  { name: 'Daniel Fridell & Sven Lindvall - Down Side', src: downSide },
  { name: 'Scoobadive - Interplanetary', src: interplanetary },
];

const MusicPlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false); // State for the info modal
  const audioRef = useRef<HTMLAudioElement>(null);

  // --- Logic for Dragging the Player Window ---
  const playerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  // Set initial position on the bottom right after the component mounts
  useEffect(() => {
    if (playerRef.current) {
      const { offsetWidth, offsetHeight } = playerRef.current;
      setPosition({
        x: window.innerWidth - offsetWidth - 20,
        y: window.innerHeight - offsetHeight - 20,
      });
    }
  }, []);

  // Effect to handle dragging movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offsetRef.current.x,
        y: e.clientY - offsetRef.current.y,
      });
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.body.style.userSelect = 'none';
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Initializes dragging state and calculates mouse offset
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    if (playerRef.current) {
        const rect = playerRef.current.getBoundingClientRect();
        offsetRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }
    e.preventDefault();
  }, []);
  
  // --- Audio Playback Logic ---
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          console.error("Audio playback failed:", e);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const handlePlayPause = () => setIsPlaying(prev => !prev);
  const handleNext = useCallback(() => {
    setCurrentTrackIndex(prevIndex => (prevIndex + 1) % playlist.length);
    setIsPlaying(true);
  }, []);
  const handlePrev = () => {
    setCurrentTrackIndex(prevIndex => (prevIndex - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={playerRef}
      className="music-player-window"
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: 'none',
      }}
    >
      <div 
        className="title-bar"
        onMouseDown={handleMouseDown}
      >
        <span className="title-text"><IoIosMusicalNotes/> You've Got Mail!</span>
        <button onClick={() => setIsOpen(false)} className="close-btn"><IoMdClose/></button>
      </div>
      <div className="player-body">
        {showInfo && (
          <div className="info-modal">
            <div className="info-modal-content">
              <p>All music is royalty-free, provided by their respective artists. Full credit to the talented creators!</p>
              <button onClick={() => setShowInfo(false)}>OK</button>
            </div>
          </div>
        )}
        <div className="now-playing">
            <p>Now Playing:</p>
            <span>{playlist[currentTrackIndex].name}</span>
        </div>
        <div className="controls">
          <button onClick={handlePrev} aria-label="Previous track"><FaBackward/></button>
          <button onClick={handlePlayPause} className="play-pause-btn" aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <FaPause/> : <FaPlay/>}
          </button>
          <button onClick={handleNext} aria-label="Next track"><FaForward/></button>
        </div>
        <button onClick={() => setShowInfo(true)} className="info-btn" aria-label="Music credits">
          <IoIosInformationCircle />
        </button>
        <audio
          ref={audioRef}
          src={playlist[currentTrackIndex].src}
          onEnded={handleNext}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          preload="auto"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
