import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import FloatingHearts from "@/components/FloatingHearts";
import TypewriterText from "@/components/TypewriterText";
import StoryNavigation from "@/components/StoryNavigation";

const Yours = () => (
  <>
    <FloatingHearts count={10} />
    <PageWrapper>
      <div className="text-center max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8"
        >
          No Matter What
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 text-lg md:text-xl text-foreground/90 font-body leading-relaxed mb-10"
        >
          <p>Life gets busy.</p>
          <p>Sometimes we get irritated.</p>
          <p>Sometimes we misunderstand each other.</p>
          <p className="pt-4 text-muted-foreground">But one thing will never change.</p>
          <p className="text-primary font-medium text-xl md:text-2xl pt-2">
            My heart still belongs to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="italic text-muted-foreground font-script text-xl md:text-2xl"
        >
          <TypewriterText
            text={`"No matter where life takes us, I will always choose you."`}
            speed={55}
            delay={2000}
          />
        </motion.div>
      </div>
    </PageWrapper>
    <StoryNavigation />
  </>
);

export default Yours;
