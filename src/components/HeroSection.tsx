import { ShoppingBag, MapPin, Book, Activity, ArrowRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// interface HeroSectionProps {
//   onNavigateToProducts?: () => void;
// }

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const onNavigateToProducts = () => {
    navigate('/shop');
  };

  const quickActions = [
    { icon: ShoppingBag, title: "Shop Products", count: "5,000+" },
    { icon: MapPin, title: "Find Shelters", count: "200+" },
    { icon: Book, title: "Pet Breeds", count: "150+" },
    { icon: Activity, title: "Track Pets", count: "Active" }
  ];

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1526363269865-60998e11d82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHBldHMlMjBkb2clMjBjYXQlMjB0b2dldGhlcnxlbnwxfHx8fDE3NTc0MTYxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Happy pets - dog and cat together",
      title: "Perfect Companions"
    },
    {
      src: "https://images.unsplash.com/photo-1754499265678-8d5572e61fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcHVwcHklMjBnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MXx8fHwxNzU3MzQ5OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Cute golden retriever puppy",
      title: "Loyal Friends"
    },
    {
      src: "https://images.unsplash.com/photo-1705147296072-6c5da9ca5c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNhdCUyMGtpdHRlbiUyMHBsYXlpbmd8ZW58MXx8fHwxNzU3NDE2MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Playful kitten",
      title: "Playful Companions"
    },
    {
      src: "https://images.unsplash.com/photo-1740745230774-724be6ce921d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGV0cyUyMGFkb3B0aW9uJTIwc2hlbHRlcnxlbnwxfHx8fDE3NTc0MTYzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pets waiting for adoption",
      title: "Waiting for Love"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Your Pet's Perfect Home Starts Here</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Find Your Perfect
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Companion</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Discover loving pets for adoption, premium pet products, and expert care guidance all in one trusted marketplace.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Adopt a Pet Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              onClick={onNavigateToProducts}
              >
                Shop Pet Products
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 mb-2">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-lg font-semibold text-foreground">{action.count}</div>
                    <div className="text-sm text-muted-foreground">{action.title}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Image Container */}
              <div className="relative w-full h-[400px] lg:h-[500px]">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-lg backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-lg backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </Button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-secondary w-8'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
              
              {/* Floating Cards */}
              <Card className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">2,847 pets adopted this month!</span>
                </CardContent>
              </Card>
              
              <Card className="absolute bottom-16 right-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-medium text-foreground">Find your perfect match</span>
                </CardContent>
              </Card>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl"></div>
    </section>
  );
}