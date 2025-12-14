import { useState } from "react";
import TopBar from "@/components/instagram/TopBar";
import ProfileSection from "@/components/instagram/ProfileSection";
import StoriesSection from "@/components/instagram/StoriesSection";
import FeedGrid, { FeedPost } from "@/components/instagram/FeedGrid";
import StoryViewer from "@/components/instagram/StoryViewer";
import PostView from "@/components/instagram/PostView";
import ContactMenu from "@/components/instagram/ContactMenu";
import QuoteModal from "@/components/instagram/QuoteModal";

const Index = () => {
  const [storyViewerOpen, setStoryViewerOpen] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState<FeedPost | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleStoryClick = (index: number) => {
    setStoryIndex(index);
    setStoryViewerOpen(true);
  };

  const handleQuoteClick = () => {
    setMenuOpen(false);
    setSelectedPost(null);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <TopBar onMenuClick={() => setMenuOpen(true)} />
      
      <main>
        <ProfileSection onQuoteClick={handleQuoteClick} />
        <StoriesSection onStoryClick={handleStoryClick} />
        <FeedGrid onPostClick={setSelectedPost} />
      </main>

      {/* Story Viewer */}
      {storyViewerOpen && (
        <StoryViewer 
          initialIndex={storyIndex} 
          onClose={() => setStoryViewerOpen(false)} 
        />
      )}

      {/* Post View */}
      {selectedPost && (
        <PostView 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)}
          onQuoteClick={handleQuoteClick}
        />
      )}

      {/* Contact Menu */}
      <ContactMenu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)}
        onQuoteClick={handleQuoteClick}
      />

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
      />
    </div>
  );
};

export default Index;
