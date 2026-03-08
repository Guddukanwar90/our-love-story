import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggle = () => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.play().catch(() => {});
        audioRef.current.muted = false;
      } else {
        audioRef.current.muted = true;
      }
      setMuted(!muted);
    }
  };

  return (
    <>
      {/* Place your music file at /public/music/love.mp3 */}
      <audio ref={audioRef} src="/music/love.mp3" loop muted />
      <button
        onClick={toggle}
        className="fixed top-4 right-4 z-50 p-3 rounded-full border border-primary/30 bg-muted/50 backdrop-blur-sm text-primary transition-all duration-300 hover:bg-primary/10 active:bg-primary/10"
        aria-label={muted ? "Unmute music" : "Mute music"}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </>
  );
};

export default MusicPlayer;
