import { motion } from "framer-motion";

const LoadingScreen = () => (
  <motion.div
    className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="animate-heart-beat text-5xl mb-6">❤️</div>
    <p className="font-script text-xl text-muted-foreground glow-text">
      Loading something special for you ❤️
    </p>
  </motion.div>
);

export default LoadingScreen;
