import logo from "@/assets/logo-paulofloors.png";

interface ProfileSectionProps {
  onQuoteClick: () => void;
}

const ProfileSection = ({ onQuoteClick }: ProfileSectionProps) => {
  return (
    <section className="px-4 py-3">
      {/* Profile header - Instagram style with stats */}
      <div className="flex items-center gap-6 mb-3">
        <div className="story-ring flex-shrink-0">
          <div className="story-ring-inner">
            <div className="w-[77px] h-[77px] rounded-full overflow-hidden bg-foreground">
              <img 
                src={logo} 
                alt="PauloFloors" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex flex-1 justify-around">
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">847</p>
            <p className="text-xs text-muted-foreground">posts</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">12.4K</p>
            <p className="text-xs text-muted-foreground">followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">156</p>
            <p className="text-xs text-muted-foreground">following</p>
          </div>
        </div>
      </div>

      {/* Name and bio */}
      <div className="mb-3">
        <h1 className="text-sm font-semibold text-foreground">PauloFloors Design Center</h1>
        <p className="text-xs text-muted-foreground mb-1">Floor Installation Service</p>
        <p className="text-sm text-foreground leading-snug">
          🏠 Transforming homes with premium hardwood floors{"\n"}
          📍 Serving the greater metro area{"\n"}
          ✨ 15+ years of craftsmanship excellence
        </p>
      </div>

      {/* CTA Button - Instagram style */}
      <button 
        onClick={onQuoteClick}
        className="w-full bg-secondary hover:bg-secondary/80 text-foreground text-sm font-semibold py-1.5 px-4 rounded-lg transition-colors"
      >
        Get a free preliminary quote
      </button>
    </section>
  );
};

export default ProfileSection;
