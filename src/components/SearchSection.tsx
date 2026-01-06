import { Search, Mic } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export function SearchSection() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            type="search"
            placeholder="Search pets, products, shelters, articles..."
            className="w-full pl-12 pr-16 h-14 rounded-full border-2 border-border/50 focus:border-primary bg-card shadow-sm text-lg"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mic className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}