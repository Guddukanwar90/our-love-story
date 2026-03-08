import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingHearts from "@/components/FloatingHearts";
import TapHearts from "@/components/TapHearts";
import MusicPlayer from "@/components/MusicPlayer";
import Welcome from "./pages/Welcome";
import Sorry from "./pages/Sorry";
import Feelings from "./pages/Feelings";
import Yours from "./pages/Yours";
import Memories from "./pages/Memories";
import Journey from "./pages/Journey";
import Letter from "./pages/Letter";
import Ending from "./pages/Ending";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const IntroScreen = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background cursor-pointer"
      onClick={() => navigate("/welcome")}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingHearts count={20} />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.3 }}
        className="text-center z-10 px-6"
      >
        <div className="text-5xl mb-6 animate-heart-beat">❤️</div>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
          Tap to Start Our Story
        </h1>
        <p className="text-lg text-muted-foreground font-script animate-pulse-glow">
          ❤️
        </p>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            {loading && <LoadingScreen key="loading" />}
          </AnimatePresence>

          {!loading && (
            <>
              <TapHearts />
              <MusicPlayer />
              <Routes>
                <Route path="/" element={<IntroScreen />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/sorry" element={<Sorry />} />
                <Route path="/feelings" element={<Feelings />} />
                <Route path="/yours" element={<Yours />} />
                <Route path="/memories" element={<Memories />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/letter" element={<Letter />} />
                <Route path="/ending" element={<Ending />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
