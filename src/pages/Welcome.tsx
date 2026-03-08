import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import FloatingHearts from "@/components/FloatingHearts";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <FloatingHearts count={12} />
      <PageWrapper>
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="text-6xl mb-8 animate-heart-beat"
          >
            ❤️
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4"
          >
            For My Baby Doll ❤️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-body mb-10"
          >
            A small corner of the internet made only for you.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            onClick={() => navigate("/sorry")}
            className="romantic-btn font-script text-xl"
          >
            Open My Heart
          </motion.button>
        </div>
      </PageWrapper>
    </>
  );
};

export default Welcome;
