import { Menu } from "lucide-react";
import logo from "@/assets/logo-paulofloors.png";

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar = ({ onMenuClick }: TopBarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border safe-area-top">
      <div className="flex items-center justify-between px-4 h-11">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-foreground">
            <img 
              src={logo} 
              alt="PauloFloors" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-foreground">PauloFloors</span>
        </div>
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-secondary rounded-full transition-colors"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
