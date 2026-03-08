import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeartExplosionProps {
  active: boolean;
}

const HeartExplosion = ({ active }: HeartExplosionProps) => {
  if (!active) return null;

  const hearts = Array.from({ length: 40 }, (_, i) => {
    const angle = (i / 40) * 360;
    const distance = 100 + Math.random() * 300;
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = Math.sin((angle * Math.PI) / 180) * distance;
    const size = 12 + Math.random() * 24;

    return { id: i, x, y, size, delay: Math.random() * 0.3 };
  });

  return (
    <div className="fixed inset-0 z-[150] pointer-events-none flex items-center justify-center">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-primary"
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{ scale: 1, x: h.x, y: h.y, opacity: 0 }}
          transition={{ duration: 1.5, delay: h.delay, ease: "easeOut" }}
          style={{ fontSize: h.size }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
};

export default HeartExplosion;
