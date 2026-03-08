import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import FloatingHearts from "@/components/FloatingHearts";
import HeartExplosion from "@/components/HeartExplosion";
import StoryNavigation from "@/components/StoryNavigation";

const Ending = () => {
  const [exploded, setExploded] = useState(false);

  return (
    <>
      <FloatingHearts count={12} />
      <HeartExplosion active={exploded} />
      <PageWrapper>
        <div className="text-center max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8"
          >
            Always Us ❤️
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 text-lg md:text-xl text-foreground/90 font-body leading-relaxed mb-10"
          >
            <p>No matter how many ups and downs life brings,</p>
            <p>I will still hold your hand the same way.</p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!exploded ? (
              <motion.button
                key="btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8 }}
                onClick={() => setExploded(true)}
                className="romantic-btn font-script text-xl"
              >
                I Love You Baby Doll
              </motion.button>
            ) : (
              <motion.div
                key="msg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="text-center"
              >
                <p className="text-3xl md:text-5xl font-display font-bold text-gradient animate-heart-beat">
                  I Love You Abhimaan ❤️
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PageWrapper>
      <StoryNavigation />
    </>
  );
};

export default Ending;
