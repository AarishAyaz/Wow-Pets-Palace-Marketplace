import { Heart, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContentFeed() {
  const feedItems = [
    {
      id: 1,
      type: 'adoption',
      image: 'https://images.unsplash.com/photo-1754499265662-a1b9367c95f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZ29sZGVuJTIwcmV0cmlldmVyJTIwZG9nfGVufDF8fHx8MTc1NzQxNDk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Max - Golden Retriever',
      description: '3 years old • Male • Friendly and energetic',
      action: 'Adopt Me',
      actionType: 'adoption',
      location: 'Happy Paws Shelter'
    },
    {
      id: 2,
      type: 'product',
      image: 'https://images.unsplash.com/photo-1676193866128-03a926df76ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBmb29kJTIwZG9nJTIwa2liYmxlfGVufDF8fHx8MTc1NzQxNDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Premium Dog Food',
      description: 'High-quality nutrition for adult dogs',
      price: '$29.99',
      action: '$29.99',
      actionType: 'product',
      rating: 4.8
    },
    {
      id: 3,
      type: 'adoption',
      image: 'https://images.unsplash.com/photo-1609854892250-72dab0fc9282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwa2l0dGVuJTIwY2F0JTIwb3JhbmdlfGVufDF8fHx8MTc1NzQxNDk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Luna - Orange Tabby',
      description: '1 year old • Female • Playful and affectionate',
      action: 'Adopt Me',
      actionType: 'adoption',
      location: 'Whiskers & Tails Rescue'
    },
    {
      id: 4,
      type: 'product',
      image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjB0b3lzJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzU3Mzg2NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Interactive Pet Toys Set',
      description: 'Keep your pets entertained and active',
      price: '$19.99',
      action: '$19.99',
      actionType: 'product',
      rating: 4.6
    },
    {
      id: 5,
      type: 'adoption',
      image: 'https://images.unsplash.com/photo-1629598624490-609d11c95b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcHVwcHklMjBsYWJyYWRvcnxlbnwxfHx8fDE3NTc0MTQ5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Buddy - Labrador Mix',
      description: '6 months old • Male • Gentle and curious',
      action: 'Adopt Me',
      actionType: 'adoption',
      location: 'City Animal Shelter'
    },
    {
      id: 6,
      type: 'article',
      image: 'https://images.unsplash.com/photo-1754499265662-a1b9367c95f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZ29sZGVuJTIwcmV0cmlldmVyJTIwZG9nfGVufDF8fHx8MTc1NzQxNDk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Pet Care Tips for New Owners',
      description: 'Essential guide for first-time pet parents',
      action: 'Read More',
      actionType: 'article',
      readTime: '5 min read'
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Featured Pets & Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedItems.map((item) => (
            <Card 
              key={item.id}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 overflow-hidden"
            >
              <div className="relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full shadow-sm"
                >
                  <Heart className="w-4 h-4 text-gray-600" />
                </Button>
                {item.type === 'adoption' && (
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    Adoption
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {item.location && (
                  <p className="text-xs text-muted-foreground mb-3">{item.location}</p>
                )}
                
                {item.rating && (
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 fill-secondary text-secondary mr-1" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                )}
                
                {item.readTime && (
                  <p className="text-xs text-muted-foreground mb-3">{item.readTime}</p>
                )}

                <div className="flex items-center justify-between">
                  <Button
                    className={`rounded-full px-6 ${
                      item.actionType === 'adoption'
                        ? 'bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90'
                        : item.actionType === 'product'
                        ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {item.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}