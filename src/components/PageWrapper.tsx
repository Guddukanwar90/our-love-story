import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative z-10"
  >
    {children}
  </motion.div>
);

export default PageWrapper;
