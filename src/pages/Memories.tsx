import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import FloatingHearts from "@/components/FloatingHearts";
import StoryNavigation from "@/components/StoryNavigation";

/*
HOW TO ADD YOUR PHOTOS & VIDEOS:

1. Place photos in: /public/memories/photos/
   e.g., /public/memories/photos/photo1.jpg

2. Place videos in: /public/memories/videos/
   e.g., /public/memories/videos/video1.mp4

3. Update the arrays below with your file paths
   */

const photos = [
"/memories/photos/photo1.jpeg",
"/memories/photos/photo3.jpeg",
"/memories/photos/photo4.jpeg",
"/memories/photos/photo6.jpeg",
"/memories/photos/photo7.jpeg",
"/memories/photos/photo9.jpeg",
];

const videos = [
"/memories/videos/video2.mp4",
"/memories/videos/video5.mp4",
"/memories/videos/video8.mp4",
];

// Combine photos and videos and sort by number in filename
const media = [...photos, ...videos].sort((a, b) => {
const numA = parseInt(a.match(/\d+/)?.[0] || "0");
const numB = parseInt(b.match(/\d+/)?.[0] || "0");
return numA - numB;
});

// Placeholder items when no real media is added yet
const placeholders = Array.from({ length: 6 }, (_, i) => ({
id: i,
type: "placeholder" as const,
}));

const Memories = () => {
const [lightbox, setLightbox] = useState<string | null>(null);

const hasMedia = media.length > 0;

return (
<> <FloatingHearts count={8} /> <PageWrapper> <div className="text-center max-w-4xl w-full">
<motion.h1
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="text-4xl md:text-5xl font-display font-bold text-gradient mb-10"
>
Our Beautiful Moments
</motion.h1>


      {!hasMedia ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20"
        >
          {placeholders.map((p) => (
            <div
              key={p.id}
              className="memory-frame aspect-square flex items-center justify-center bg-muted/30"
            >
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📸</div>
                <p className="text-xs text-muted-foreground font-body">
                  Add your memories here
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20"
        >
          {media.map((src, i) => {
            const isVideo =
              src.endsWith(".mp4") || src.endsWith(".webm");

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="memory-frame cursor-pointer aspect-square"
                onClick={() => setLightbox(src)}
              >
                {isVideo ? (
                  <video
                    src={src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Memory ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  </PageWrapper>

  {/* Lightbox */}
  <AnimatePresence>
    {lightbox && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-background/95 flex items-center justify-center p-6"
        onClick={() => setLightbox(null)}
      >
        <button
          className="absolute top-4 right-4 text-foreground p-2"
          onClick={() => setLightbox(null)}
        >
          <X size={24} />
        </button>

        {lightbox.endsWith(".mp4") || lightbox.endsWith(".webm") ? (
          <video
            src={lightbox}
            controls
            autoPlay
            className="max-w-full max-h-[80vh] rounded-lg glow-box"
          />
        ) : (
          <img
            src={lightbox}
            alt="Memory"
            className="max-w-full max-h-[80vh] rounded-lg glow-box"
          />
        )}
      </motion.div>
    )}
  </AnimatePresence>

  <StoryNavigation />
</>


);
};

export default Memories;
