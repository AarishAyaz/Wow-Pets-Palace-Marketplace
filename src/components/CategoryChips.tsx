import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';

export function CategoryChips() {
  const categories = [
    { name: 'Pets', active: true },
    { name: 'Adoption', active: false },
    { name: 'Food', active: false },
    { name: 'Accessories', active: false },
    { name: 'Breeds Info', active: false },
    { name: 'Articles', active: false },
  ];

  return (
    <section className="py-4 px-4">
      <div className="container mx-auto">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-3 pb-2">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`px-6 py-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 text-sm font-medium ${
                  category.active
                    ? 'bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90'
                    : 'border-2 border-primary/20 text-primary hover:bg-primary/10'
                }`}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}