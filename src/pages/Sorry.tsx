import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import FloatingHearts from "@/components/FloatingHearts";
import TypewriterText from "@/components/TypewriterText";
import StoryNavigation from "@/components/StoryNavigation";

const Sorry = () => (
  <>
    <FloatingHearts count={8} />
    <PageWrapper>
      <div className="text-center max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8"
        >
          I'm Really Sorry
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 text-lg md:text-xl text-foreground/90 font-body leading-relaxed mb-10"
        >
          <p>I know the last few days were not perfect.</p>
          <p>Maybe I disturbed you when you were busy.</p>
          <p>Maybe I acted a little childish.</p>
          <p className="pt-4 text-muted-foreground">But the truth is simple…</p>
          <p className="text-primary font-medium text-xl md:text-2xl pt-2">
            I just missed you more than usual.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="italic text-muted-foreground font-script text-xl md:text-2xl"
        >
          <TypewriterText
            text={`"Even my mistakes come from loving you too much."`}
            speed={60}
            delay={2000}
          />
        </motion.div>
      </div>
    </PageWrapper>
    <StoryNavigation />
  </>
);

export default Sorry;
