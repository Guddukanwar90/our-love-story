import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import FloatingHearts from "@/components/FloatingHearts";
import TypewriterText from "@/components/TypewriterText";
import StoryNavigation from "@/components/StoryNavigation";

const Letter = () => (
  <>
    <FloatingHearts count={8} />
    <PageWrapper>
      <div className="text-center max-w-lg">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-gradient mb-10"
        >
          From My Heart
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-gradient border border-primary/10 rounded-2xl p-8 md:p-10 text-left space-y-4 font-body text-lg md:text-xl text-foreground/90 leading-relaxed glow-box-soft"
        >
          <p className="font-script text-2xl text-primary mb-6">Dear Abhii,</p>
          <p>Sometimes I may annoy you.</p>
          <p>Sometimes I may act childish.</p>
          <p className="pt-2 text-muted-foreground">But the truth is simple.</p>
          <p className="text-primary font-medium">
            My heart has only one home, and that is you.
          </p>
          <p className="pt-2">
            These 3 years and 9 months with you have given me memories I will never forget.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 italic text-muted-foreground font-script text-xl md:text-2xl"
        >
          <TypewriterText
            text={`"If I had to choose again, I would still choose you."`}
            speed={55}
            delay={2000}
          />
        </motion.div>
      </div>
    </PageWrapper>
    <StoryNavigation />
  </>
);

export default Letter;
