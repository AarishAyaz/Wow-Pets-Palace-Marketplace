import { Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-card to-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest pet care tips, adoption stories, and product updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full"
            />
            <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links and Social */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-primary">Wow Pets Palace</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Wow Pets Palace is your trusted source for finding pets from
              responsible breeders and adoptable pets. Whether you’re looking to
              adopt or need resources on pet care, we’re here to help.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pet Adoption</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pet Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Breed Information</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pet Tracking</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © 2025 Wow Pets Palace. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
             <a
    href="https://www.instagram.com/wowpetspalace/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
      <Button variant="ghost" size="icon" className="rounded-full">
              <Instagram className="w-5 h-5" />
            </Button>
  </a>
          
             <a
    href="https://www.facebook.com/profile.php?id=61555678081345"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  ><Button variant="ghost" size="icon" className="rounded-full">
              <Facebook className="w-5 h-5" />
            </Button></a>
            
             <a
    href="https://x.com/WowPetsPalace"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
  >

<Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="w-5 h-5" />
            </Button>
  </a>
         <a
    href="https://www.youtube.com/@wowpetspalace"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Youtube"
  >

<Button variant="ghost" size="icon" className="rounded-full">
              <Youtube className="w-5 h-5" />
            </Button>
  </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}