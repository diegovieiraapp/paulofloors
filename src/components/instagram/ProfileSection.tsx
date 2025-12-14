import logo from "@/assets/logo-paulofloors.png";

interface ProfileSectionProps {
  onQuoteClick: () => void;
}

const ProfileSection = ({ onQuoteClick }: ProfileSectionProps) => {
  return (
    <section className="px-4 py-4">
      {/* Profile header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="story-ring flex-shrink-0">
          <div className="story-ring-inner">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-foreground">
              <img 
                src={logo} 
                alt="PauloFloors" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="flex-1 pt-2">
          <h1 className="font-semibold text-lg text-foreground">PauloFloors</h1>
          <p className="text-sm text-muted-foreground">
            Floor Installation • Refinishing • Sanding
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="mb-4">
        <p className="text-sm text-foreground leading-relaxed">
          🏠 Transforming homes with premium hardwood floors<br />
          📍 Serving the greater metro area<br />
          ✨ 15+ years of craftsmanship excellence
        </p>
      </div>

      {/* CTA Button */}
      <button 
        onClick={onQuoteClick}
        className="ig-button-primary"
      >
        Get a free preliminary quote
      </button>
    </section>
  );
};

export default ProfileSection;
