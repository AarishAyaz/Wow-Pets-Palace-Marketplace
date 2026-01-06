// import { Card, CardContent } from './ui/card';
// import { Button } from './ui/button';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
// import { useRef } from 'react';

// export function BreedsSection() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const breeds = [
//     {
//       name: "Golden Retriever",
//       image: "https://images.unsplash.com/photo-1735447618482-38bf178d824c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBicmVlZHxlbnwxfHx8fDE3NTc1MDQxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       temperament: "Friendly, Intelligent",
//       size: "Large",
//       origin: "Scotland"
//     },
//     {
//       name: "Siamese Cat",
//       image: "https://images.unsplash.com/photo-1654063706176-b54ae9fd614e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWFtZXNlJTIwY2F0JTIwYnJlZWR8ZW58MXx8fHwxNzU3NDcyODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       temperament: "Social, Vocal",
//       size: "Medium",
//       origin: "Thailand"
//     },
//     {
//       name: "Labrador",
//       image: "https://images.unsplash.com/photo-1631085942927-306f7f21cc22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJyYWRvciUyMGJyZWVkfGVufDF8fHx8MTc1NzUwNDExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       temperament: "Outgoing, Active",
//       size: "Large",
//       origin: "Canada"
//     },
//     {
//       name: "Persian Cat",
//       image: "https://images.unsplash.com/photo-1678561762703-ef8259c568e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwYnJlZWR8ZW58MXx8fHwxNzU3NDcyODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       temperament: "Quiet, Sweet",
//       size: "Medium",
//       origin: "Iran"
//     },
//     {
//       name: "German Shepherd",
//       image: "https://images.unsplash.com/photo-1636329136978-965f87f3b7af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJtYW4lMjBzaGVwaGVyZCUyMGJyZWVkfGVufDF8fHx8MTc1NzUwNDExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       temperament: "Loyal, Courageous",
//       size: "Large",
//       origin: "Germany"
//     },
//     {
//       name: "British Shorthair",
//       image: "https://images.unsplash.com/photo-1621189824721-9c77ad4e9d6c?w=300&h=200&fit=crop",
//       temperament: "Calm, Affectionate",
//       size: "Medium",
//       origin: "United Kingdom"
//     },
//     {
//       name: "Border Collie",
//       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
//       temperament: "Energetic, Smart",
//       size: "Medium",
//       origin: "Scotland"
//     },
//     {
//       name: "Maine Coon",
//       image: "https://images.unsplash.com/photo-1615789047772-7209e9faa2f2?w=300&h=200&fit=crop",
//       temperament: "Gentle, Playful",
//       size: "Large",
//       origin: "United States"
//     },
//     {
//       name: "French Bulldog",
//       image: "https://images.unsplash.com/photo-1589207899904-6e2c93c9b1d7?w=300&h=200&fit=crop",
//       temperament: "Adaptable, Playful",
//       size: "Small",
//       origin: "France"
//     },
//     {
//       name: "Ragdoll Cat",
//       image: "https://images.unsplash.com/photo-1607940579279-6b3e84a3fb00?w=300&h=200&fit=crop",
//       temperament: "Docile, Placid",
//       size: "Large",
//       origin: "United States"
//     }
//   ];

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const scrollAmount = 300;
//       scrollRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <section className="py-16 px-4 bg-background">
//       <div className="container mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold text-foreground">
//               Explore Pet
//               <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Breeds</span>
//             </h2>
//             <p className="text-muted-foreground">
//               Learn about different pet breeds and find your perfect match
//             </p>
//           </div>

//           <div className="flex items-center space-x-2">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => scroll('left')}
//               className="rounded-full"
//             >
//               <ChevronLeft className="w-4 h-4" />
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => scroll('right')}
//               className="rounded-full"
//             >
//               <ChevronRight className="w-4 h-4" />
//             </Button>
//           </div>
//         </div>

//         {/* Breeds Scroll */}
//         <div 
//           ref={scrollRef}
//           className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {breeds.map((breed, index) => (
//             <Card 
//               key={index}
//               className="flex-shrink-0 w-72 group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card"
//             >
//               <CardContent className="p-0">
//                 <div className="relative overflow-hidden rounded-t-lg">
//                   <ImageWithFallback
//                     src={breed.image}
//                     alt={breed.name}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
                
//                 <div className="p-6 space-y-3">
//                   <h3 className="font-semibold text-lg text-foreground">{breed.name}</h3>
                  
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-muted-foreground">Temperament:</span>
//                       <span className="text-foreground font-medium">{breed.temperament}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-muted-foreground">Size:</span>
//                       <span className="text-foreground font-medium">{breed.size}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-muted-foreground">Origin:</span>
//                       <span className="text-foreground font-medium">{breed.origin}</span>
//                     </div>
//                   </div>

//                   <Button 
//                     variant="ghost" 
//                     className="w-full text-primary hover:text-primary hover:bg-primary/10 group/btn"
//                   >
//                     Learn More
//                     <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-8">
//           <Button 
//             variant="outline" 
//             size="lg"
//             className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-full transition-all duration-300"
//           >
//             View All Breeds
//             <ArrowRight className="w-5 h-5 ml-2" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";

interface Breed {
  breed_id: number;
  breed_title: string;
  slug: string;
  lifespan: string;
  weight: string,
  height: string,
  category_title: string;
  breed_images: string[];
}

async function fetchBreeds(): Promise<Breed[]> {
  const { data } = await axios.get(
    "https://www.wowpetspalace.com/test/breed/get10BreedsbyCategory"
  );
  return data.data;
}

export function BreedsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data: breeds = [], isLoading, error } = useQuery({
    queryKey: ["breeds"],
    queryFn: fetchBreeds,
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">
              Explore Pet
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Breeds
              </span>
            </h2>
            <p className="text-muted-foreground">
              Learn about different pet breeds and find your perfect match
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Loading / Error States */}
        {isLoading && <p className="text-center text-muted-foreground">Loading breeds...</p>}
        {error && <p className="text-center text-red-500">Failed to load breeds.</p>}

        {/* Breeds Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {breeds.map((breed) => (
            <Card
              key={breed.breed_id}
              className="flex-shrink-0 w-72 group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={`https://www.wowpetspalace.com/dashboard${breed.breed_images[0]}`}
                    alt={breed.breed_title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">
                    {breed.breed_title}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="text-foreground font-medium">
                        {breed.category_title}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lifespan:</span>
                      <span className="text-foreground font-medium">{breed.lifespan}</span>
                    </div>
                    {/* <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Weight:</span>
                      <span className="text-foreground font-medium">{breed.weight}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Height:</span>
                      <span className="text-foreground font-medium">{breed.height}</span>
                    </div> */}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-primary hover:text-primary hover:bg-primary/10 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-full transition-all duration-300"
          >
            View All Breeds
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
