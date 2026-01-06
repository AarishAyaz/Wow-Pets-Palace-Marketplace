import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { MapPin, Heart, Users } from 'lucide-react';

export function ShelterSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Local Animal Shelters</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Connect with
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Local Shelters</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover trusted animal shelters in your area and help give loving pets a second chance. 
                Our network of verified shelters makes it easy to find adoptable animals, volunteer opportunities, 
                and ways to support your local pet community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Partner Shelters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15K+</div>
                <div className="text-sm text-muted-foreground">Pets Rescued</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find Shelters Near You
            </Button>
          </div>

          {/* Right Video */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl border-0">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                  {/* Video placeholder with overlay */}
                  <video 
                    className="w-full h-full object-cover rounded-lg"
                    poster="https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyfGVufDF8fHx8MTc1NzUwMzUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    controls
                    preload="metadata"
                  >
                    {/* Placeholder for actual video - using poster image as fallback */}
                    <source src="#" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                    <Button
                      size="icon"
                      className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-primary shadow-lg"
                    >
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating info cards */}
            <Card className="absolute -bottom-4 -left-4 bg-white shadow-lg border-0">
              <CardContent className="p-4 flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">1,247</div>
                  <div className="text-xs text-muted-foreground">Active Volunteers</div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -top-4 -right-4 bg-white shadow-lg border-0">
              <CardContent className="p-4 flex items-center space-x-3">
                <Heart className="w-5 h-5 text-red-500" />
                <div>
                  <div className="font-semibold text-sm">24/7</div>
                  <div className="text-xs text-muted-foreground">Support Available</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}