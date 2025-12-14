import { X, Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

interface ContactMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onQuoteClick: () => void;
}

const ContactMenu = ({ isOpen, onClose, onQuoteClick }: ContactMenuProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-foreground/50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="absolute bottom-0 left-0 right-0 bg-background rounded-t-2xl p-6 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center mb-4">
          <div className="w-10 h-1 bg-muted rounded-full" />
        </div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
          Contact Us
        </h2>

        <div className="space-y-4">
          <a 
            href="tel:+1234567890" 
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Call Us</p>
              <p className="text-xs text-muted-foreground">(123) 456-7890</p>
            </div>
          </a>

          <a 
            href="mailto:contact@paulofloors.com" 
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Email Us</p>
              <p className="text-xs text-muted-foreground">contact@paulofloors.com</p>
            </div>
          </a>

          <button 
            onClick={onQuoteClick}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors w-full text-left"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Get a Quote</p>
              <p className="text-xs text-muted-foreground">Free preliminary estimate</p>
            </div>
          </button>

          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Follow on Instagram</p>
              <p className="text-xs text-muted-foreground">@paulofloors</p>
            </div>
          </a>

          <div 
            className="flex items-center gap-4 p-3 rounded-lg"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Our Location</p>
              <p className="text-xs text-muted-foreground">Greater Metro Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMenu;
