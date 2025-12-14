import { useState } from "react";
import feed1 from "@/assets/feed-1.jpg";
import feed2 from "@/assets/feed-2.jpg";
import feed3 from "@/assets/feed-3.jpg";
import feed4 from "@/assets/feed-4.jpg";
import feed5 from "@/assets/feed-5.jpg";
import feed6 from "@/assets/feed-6.jpg";

export interface Story {
  id: string;
  title: string;
  image: string;
  viewed: boolean;
}

const stories: Story[] = [
  { id: "1", title: "Installation", image: feed1, viewed: false },
  { id: "2", title: "Sanding", image: feed2, viewed: false },
  { id: "3", title: "Refinishing", image: feed3, viewed: false },
  { id: "4", title: "Before/After", image: feed4, viewed: false },
  { id: "5", title: "Kitchen", image: feed5, viewed: false },
  { id: "6", title: "Staining", image: feed6, viewed: false },
];

interface StoriesSectionProps {
  onStoryClick: (storyIndex: number) => void;
}

const StoriesSection = ({ onStoryClick }: StoriesSectionProps) => {
  const [viewedStories, setViewedStories] = useState<Set<string>>(new Set());

  const handleStoryClick = (story: Story, index: number) => {
    setViewedStories(prev => new Set([...prev, story.id]));
    onStoryClick(index);
  };

  return (
    <section className="border-b border-border">
      <div className="flex gap-4 px-4 py-3 overflow-x-auto scrollbar-hide">
        {stories.map((story, index) => (
          <button
            key={story.id}
            onClick={() => handleStoryClick(story, index)}
            className="flex flex-col items-center gap-1 flex-shrink-0"
          >
            <div className={viewedStories.has(story.id) ? "p-0.5 rounded-full border-2 border-muted" : "story-ring"}>
              <div className={viewedStories.has(story.id) ? "" : "story-ring-inner"}>
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs text-foreground max-w-[64px] truncate">
              {story.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export { stories };
export default StoriesSection;
