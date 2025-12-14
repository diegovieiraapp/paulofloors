import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { stories } from "./StoriesSection";

interface StoryViewerProps {
  initialIndex: number;
  onClose: () => void;
}

const StoryViewer = ({ initialIndex, onClose }: StoryViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);

  const currentStory = stories[currentIndex];

  const goToNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  }, [currentIndex, onClose]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setProgress(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    const duration = 5000;
    const interval = 50;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, goToNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goToNext, goToPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-foreground/95 animate-fade-in">
      {/* Progress bars */}
      <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 z-10">
        {stories.map((_, index) => (
          <div 
            key={index} 
            className="flex-1 h-0.5 bg-background/30 rounded-full overflow-hidden"
          >
            <div 
              className="h-full bg-background rounded-full transition-all duration-100"
              style={{ 
                width: index < currentIndex ? "100%" : 
                       index === currentIndex ? `${progress}%` : "0%" 
              }}
            />
          </div>
        ))}
      </div>

      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-background"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Story content */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={currentStory.image} 
          alt={currentStory.title}
          className="max-h-full max-w-full object-contain"
        />

        {/* Story title overlay */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <span className="text-background text-lg font-semibold bg-foreground/50 px-4 py-2 rounded-full">
            {currentStory.title}
          </span>
        </div>

        {/* Navigation areas */}
        <button 
          onClick={goToPrev}
          className="absolute left-0 top-0 bottom-0 w-1/3 flex items-center justify-start pl-4"
          aria-label="Previous story"
        >
          {currentIndex > 0 && (
            <ChevronLeft className="w-8 h-8 text-background/70" />
          )}
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-0 top-0 bottom-0 w-1/3 flex items-center justify-end pr-4"
          aria-label="Next story"
        >
          {currentIndex < stories.length - 1 && (
            <ChevronRight className="w-8 h-8 text-background/70" />
          )}
        </button>
      </div>
    </div>
  );
};

export default StoryViewer;
