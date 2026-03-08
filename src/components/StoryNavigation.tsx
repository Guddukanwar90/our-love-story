import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pages = [
  "/welcome",
  "/sorry",
  "/feelings",
  "/yours",
  "/memories",
  "/journey",
  "/letter",
  "/ending",
];

const StoryNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = pages.indexOf(location.pathname);

  if (currentIndex === -1) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex flex-col items-center gap-3 px-6">
      {/* Progress dots */}
      <div className="flex gap-1.5">
        {pages.map((_, i) => (
          <div
            key={i}
            className={`progress-dot ${i === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Nav buttons */}
      <div className="flex gap-4">
        {currentIndex > 0 && (
          <button
            onClick={() => navigate(pages[currentIndex - 1])}
            className="nav-btn flex items-center gap-1"
          >
            <ChevronLeft size={16} />
            Previous
          </button>
        )}
        {currentIndex < pages.length - 1 && (
          <button
            onClick={() => navigate(pages[currentIndex + 1])}
            className="nav-btn flex items-center gap-1"
          >
            Next
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default StoryNavigation;
