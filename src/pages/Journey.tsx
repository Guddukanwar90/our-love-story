import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import FloatingHearts from "@/components/FloatingHearts";
import TypewriterText from "@/components/TypewriterText";
import StoryNavigation from "@/components/StoryNavigation";

const milestones = [
  { label: "3 Years", icon: "💕" },
  { label: "9 Months", icon: "🌙" },
  { label: "Countless memories", icon: "📸" },
  { label: "Endless conversations", icon: "💬" },
];

const Journey = () => (
  <>
    <FloatingHearts count={10} />
    <PageWrapper>
      <div className="text-center max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-gradient mb-10"
        >
          Our Journey
        </motion.h1>

        <div className="space-y-6 mb-10">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 romantic-gradient"
            >
              <span className="text-3xl">{m.icon}</span>
              <span className="text-xl md:text-2xl font-display text-foreground">{m.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-lg text-muted-foreground font-body mb-6"
        >
          And still… <span className="text-primary">You are my favorite person.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="italic text-muted-foreground font-script text-xl md:text-2xl"
        >
          <TypewriterText
            text={`"Every day with you is a page of my favorite story."`}
            speed={55}
            delay={2500}
          />
        </motion.div>
      </div>
    </PageWrapper>
    <StoryNavigation />
  </>
);

export default Journey;
