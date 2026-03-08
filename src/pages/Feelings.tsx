import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import FloatingHearts from "@/components/FloatingHearts";
import TypewriterText from "@/components/TypewriterText";
import StoryNavigation from "@/components/StoryNavigation";

const Feelings = () => (
  <>
    <FloatingHearts count={10} />
    <PageWrapper>
      <div className="text-center max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8"
        >
          What You Mean To Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 text-lg md:text-xl text-foreground/90 font-body leading-relaxed mb-10"
        >
          <p>You are not just someone in my life.</p>
          <p>You are the person who makes my world feel safe.</p>
          <p className="pt-4">When I talk to you, everything feels calm.</p>
          <p>When I see you smile, my whole day becomes better.</p>
          <p className="pt-4 text-primary font-medium text-xl md:text-2xl">
            You are my comfort, my happiness and my favorite person.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="italic text-muted-foreground font-script text-xl md:text-2xl"
        >
          <TypewriterText
            text={`"Some people search for love their whole life… I found mine in you."`}
            speed={55}
            delay={2000}
          />
        </motion.div>
      </div>
    </PageWrapper>
    <StoryNavigation />
  </>
);

export default Feelings;
