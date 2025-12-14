import { X, Heart, Send, MessageCircle, Bookmark } from "lucide-react";
import { FeedPost } from "./FeedGrid";
import logo from "@/assets/logo-paulofloors.png";

interface PostViewProps {
  post: FeedPost;
  onClose: () => void;
  onQuoteClick: () => void;
}

const PostView = ({ post, onClose, onQuoteClick }: PostViewProps) => {
  return (
    <div 
      className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-background rounded-lg max-w-lg w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-foreground">
              <img 
                src={logo} 
                alt="PauloFloors" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-sm text-foreground">PauloFloors</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Image */}
        <div className="aspect-square">
          <img 
            src={post.image} 
            alt={post.caption}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Actions */}
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <button className="hover:opacity-70 transition-opacity" aria-label="Like">
                <Heart className="w-6 h-6 text-foreground" />
              </button>
              <button className="hover:opacity-70 transition-opacity" aria-label="Comment">
                <MessageCircle className="w-6 h-6 text-foreground" />
              </button>
              <button className="hover:opacity-70 transition-opacity" aria-label="Share">
                <Send className="w-6 h-6 text-foreground" />
              </button>
            </div>
            <button className="hover:opacity-70 transition-opacity" aria-label="Save">
              <Bookmark className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Caption */}
          <p className="text-sm text-foreground mb-3">
            <span className="font-semibold">paulofloors</span>{" "}
            {post.caption}
          </p>

          {/* CTA */}
          <button 
            onClick={onQuoteClick}
            className="text-sm text-primary font-semibold hover:opacity-80 transition-opacity"
          >
            Get a free quote →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostView;
