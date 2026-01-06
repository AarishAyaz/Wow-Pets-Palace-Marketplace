import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Smartphone, Shield, Clock } from 'lucide-react';

export function FeaturedProductSection() {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
            Featured Product
          </Badge>
          <h2 className="mb-4 text-primary">PawTracker Pro - Never Lose Your Pet Again</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Our premium GPS tracking collar keeps your beloved pets safe with real-time location monitoring, 
            health insights, and instant alerts when they wander too far from home.
          </p>
        </div>

        {/* Product Showcase */}
        <Card className="overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Product Images */}
            <div className="relative">
              <div className="grid grid-cols-2 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1705351738451-5c8998e63941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHBldCUyMHRyYWNrZXIlMjBjb2xsYXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1Nzk0OTMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Smart pet tracking collar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                </div>
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1640377870372-898908c78bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwZXQlMjB0cmFja2luZyUyMEdQU3xlbnwxfHx8fDE3NTc5NDkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pet tracking mobile app"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-secondary/20 to-transparent" />
                </div>
              </div>
              
              {/* Floating Price Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="line-through text-muted-foreground">$149</span>
                  <span className="text-secondary font-semibold">$99</span>
                  <Badge variant="destructive" className="text-xs">33% OFF</Badge>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">Real-time GPS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm">Mobile App</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">Safe Zones</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm">30-Day Battery</span>
                  </div>
                </div>

                {/* Product Description */}
                <div className="space-y-3">
                  <h3 className="text-primary">What's Included:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Waterproof GPS tracking collar (3 sizes available)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      PawTracker Pro mobile app (iOS & Android)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      1-year warranty & 24/7 customer support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Free shipping & 30-day money-back guarantee
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                  >
                    Add to Cart - $99
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 border-primary/20 text-primary hover:bg-primary/5"
                  >
                    View Details
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-6 pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Fast Shipping</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}