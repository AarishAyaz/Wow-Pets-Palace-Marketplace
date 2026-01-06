import { Bell, ShoppingCart, User, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-primary">Wow Pets Palace</span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Explore Products
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Find Shelters
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Explore Breeds
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Track Your Pet
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Articles
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-secondary text-xs">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-secondary text-xs">
                2
              </Badge>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}