import feed1 from "@/assets/feed-1.jpg";
import feed2 from "@/assets/feed-2.jpg";
import feed3 from "@/assets/feed-3.jpg";
import feed4 from "@/assets/feed-4.jpg";
import feed5 from "@/assets/feed-5.jpg";
import feed6 from "@/assets/feed-6.jpg";

export interface FeedPost {
  id: string;
  image: string;
  caption: string;
}

const feedPosts: FeedPost[] = [
  { id: "1", image: feed1, caption: "Modern oak installation in this beautiful living room. Clean lines, warm tones. 🏠" },
  { id: "2", image: feed2, caption: "Precision sanding in progress. The key to a perfect finish starts here. 💪" },
  { id: "3", image: feed3, caption: "Stunning herringbone pattern refinished to perfection. Classic elegance. ✨" },
  { id: "4", image: feed4, caption: "Before & After: See the transformation! From worn to wonderful. 🔄" },
  { id: "5", image: feed5, caption: "Dark walnut floors making this kitchen absolutely stunning. 😍" },
  { id: "6", image: feed6, caption: "Expert staining technique for that rich, deep color. Craftsmanship matters. 🎨" },
];

interface FeedGridProps {
  onPostClick: (post: FeedPost) => void;
}

const FeedGrid = ({ onPostClick }: FeedGridProps) => {
  return (
    <section className="border-t border-border">
      {/* Grid tabs - like Instagram */}
      <div className="flex justify-center border-b border-border">
        <button className="flex-1 py-3 border-b-2 border-foreground">
          <svg className="w-6 h-6 mx-auto text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5">
        {feedPosts.map((post) => (
          <button
            key={post.id}
            onClick={() => onPostClick(post)}
            className="feed-grid-item"
          >
            <img 
              src={post.image} 
              alt={post.caption}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export { feedPosts };
export default FeedGrid;
