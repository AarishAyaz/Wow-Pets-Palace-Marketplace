import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturedBanner() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <Card className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary border-0 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 p-8 lg:p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Save a life today — Adopt a pet!
              </h2>
              <p className="text-xl mb-6 text-white/90">
                Give a loving home to a pet in need. Browse our adoption listings and find your perfect companion.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Browse Adoption Listings
              </Button>
            </div>
            <div className="flex-1 relative h-64 lg:h-80">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1703061735216-cef8098685f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBzaGVsdGVyJTIwZG9nc3xlbnwxfHx8fDE3NTc0MTQ5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy adopted pets"
                className="w-full h-full object-cover rounded-r-lg lg:rounded-r-none"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}