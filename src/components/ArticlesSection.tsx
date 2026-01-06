// import { Card, CardContent } from './ui/card';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { ChevronLeft, ChevronRight, Clock, User, ArrowRight } from 'lucide-react';
// import { useRef } from 'react';

// export function ArticlesSection() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const articles = [
//     {
//       title: "Complete Guide to Pet Nutrition",
//       excerpt: "Everything you need to know about feeding your pet the right way for optimal health.",
//       image: "https://images.unsplash.com/photo-1745252777945-d430ecf54580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBudXRyaXRpb24lMjBmZWVkaW5nfGVufDF8fHx8MTc1NzUwNDEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       category: "Nutrition",
//       readTime: "8 min",
//       author: "Dr. Sarah Johnson",
//       date: "2024-12-15"
//     },
//     {
//       title: "First-Time Pet Adoption Tips",
//       excerpt: "Essential advice for new pet parents to ensure a smooth transition for your new furry family member.",
//       image: "https://images.unsplash.com/photo-1643213641079-1e60ef170910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBjYXJlJTIwdmV0ZXJpbmFyaWFufGVufDF8fHx8MTc1NzQxNjQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       category: "Adoption",
//       readTime: "6 min",
//       author: "Mike Chen",
//       date: "2024-12-14"
//     },
//     {
//       title: "Understanding Pet Behavior",
//       excerpt: "Decode your pet's behavior and strengthen your bond through better communication.",
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop",
//       category: "Training",
//       readTime: "12 min",
//       author: "Dr. Lisa Park",
//       date: "2024-12-13"
//     },
//     {
//       title: "Seasonal Pet Care Guide",
//       excerpt: "Keep your pets safe and comfortable throughout all seasons with these expert tips.",
//       image: "https://images.unsplash.com/photo-1569473814453-5c5e9fd56a4e?w=400&h=250&fit=crop",
//       category: "Health",
//       readTime: "10 min",
//       author: "Tom Wilson",
//       date: "2024-12-12"
//     },
//     {
//       title: "Indoor vs Outdoor Pets",
//       excerpt: "Weighing the pros and cons of indoor and outdoor living for your beloved pets.",
//       image: "https://images.unsplash.com/photo-1514373941175-0a141072bbc8?w=400&h=250&fit=crop",
//       category: "Lifestyle",
//       readTime: "7 min",
//       author: "Emma Davis",
//       date: "2024-12-11"
//     },
//     {
//       title: "Pet Grooming Essentials",
//       excerpt: "Master the art of pet grooming with professional tips and techniques for home care.",
//       image: "https://images.unsplash.com/photo-1581888227599-779811939961?w=400&h=250&fit=crop",
//       category: "Grooming",
//       readTime: "9 min",
//       author: "Alex Rodriguez",
//       date: "2024-12-10"
//     },
//     {
//       title: "Senior Pet Care Guide",
//       excerpt: "Special considerations and care tips for aging pets to ensure their golden years are comfortable.",
//       image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=400&h=250&fit=crop",
//       category: "Health",
//       readTime: "11 min",
//       author: "Dr. Maria Garcia",
//       date: "2024-12-09"
//     },
//     {
//       title: "Creating a Pet-Friendly Home",
//       excerpt: "Design tips and safety measures to make your home perfect for your furry friends.",
//       image: "https://images.unsplash.com/photo-1558618666-e5c769e3be8e?w=400&h=250&fit=crop",
//       category: "Home",
//       readTime: "5 min",
//       author: "Jordan Taylor",
//       date: "2024-12-08"
//     },
//     {
//       title: "Exercise Needs by Breed",
//       excerpt: "Tailored exercise routines for different pet breeds to keep them healthy and happy.",
//       image: "https://images.unsplash.com/photo-1560472354-8c3e2a3fd1c8?w=400&h=250&fit=crop",
//       category: "Fitness",
//       readTime: "8 min",
//       author: "Chris Brown",
//       date: "2024-12-07"
//     },
//     {
//       title: "Pet Emergency Preparedness",
//       excerpt: "Be ready for any situation with this comprehensive emergency preparedness guide for pet owners.",
//       image: "https://images.unsplash.com/photo-1629065120870-d1ccafab94ce?w=400&h=250&fit=crop",
//       category: "Safety",
//       readTime: "13 min",
//       author: "Dr. Amy White",
//       date: "2024-12-06"
//     }
//   ];

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const scrollAmount = 350;
//       scrollRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const getCategoryColor = (category: string) => {
//     const colors: { [key: string]: string } = {
//       'Nutrition': 'bg-green-100 text-green-800',
//       'Adoption': 'bg-blue-100 text-blue-800',
//       'Training': 'bg-purple-100 text-purple-800',
//       'Health': 'bg-red-100 text-red-800',
//       'Lifestyle': 'bg-yellow-100 text-yellow-800',
//       'Grooming': 'bg-pink-100 text-pink-800',
//       'Home': 'bg-indigo-100 text-indigo-800',
//       'Fitness': 'bg-orange-100 text-orange-800',
//       'Safety': 'bg-red-100 text-red-800'
//     };
//     return colors[category] || 'bg-gray-100 text-gray-800';
//   };

//   return (
//     <section className="py-16 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
//       <div className="container mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold text-foreground">
//               Pet Care
//               <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Articles</span>
//             </h2>
//             <p className="text-muted-foreground">
//               Expert advice and tips to help you care for your beloved pets
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

//         {/* Articles Scroll */}
//         <div 
//           ref={scrollRef}
//           className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {articles.map((article, index) => (
//             <Card 
//               key={index}
//               className="flex-shrink-0 w-80 group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card"
//             >
//               <CardContent className="p-0">
//                 <div className="relative overflow-hidden rounded-t-lg">
//                   <ImageWithFallback
//                     src={article.image}
//                     alt={article.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <Badge className={`${getCategoryColor(article.category)} border-0`}>
//                       {article.category}
//                     </Badge>
//                   </div>
//                 </div>
                
//                 <div className="p-6 space-y-4">
//                   <h3 className="font-semibold text-lg text-foreground leading-tight line-clamp-2">
//                     {article.title}
//                   </h3>
                  
//                   <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
//                     {article.excerpt}
//                   </p>

//                   <div className="flex items-center justify-between text-xs text-muted-foreground">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex items-center space-x-1">
//                         <User className="w-3 h-3" />
//                         <span>{article.author}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Clock className="w-3 h-3" />
//                         <span>{article.readTime}</span>
//                       </div>
//                     </div>
//                     <span>{new Date(article.date).toLocaleDateString()}</span>
//                   </div>

//                   <Button 
//                     variant="ghost" 
//                     className="w-full text-primary hover:text-primary hover:bg-primary/10 group/btn"
//                   >
//                     Read Article
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
//             View All Articles
//             <ArrowRight className="w-5 h-5 ml-2" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, Clock, User, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Article {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  categoryName: string;
}

async function fetchArticles(): Promise<Article[]> {
  const { data } = await axios.get(
    'https://www.wowpetspalace.com/test/article/get10Articles'
  );
  return data;
}

export function ArticlesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data: articles = [], isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Knowledge-Hub': 'bg-green-100 text-green-800',
      'Pet-Adoption-&-Rescue': 'bg-blue-100 text-blue-800',
      'Pet-Tips-and-Advice': 'bg-purple-100 text-purple-800',
      'Dog': 'bg-red-100 text-red-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">
              Pet Care
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Articles</span>
            </h2>
            <p className="text-muted-foreground">
              Expert advice and tips to help you care for your beloved pets
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Loading & Error States */}
        {isLoading && <p className="text-center text-muted-foreground">Loading articles...</p>}
        {error && <p className="text-center text-red-500">Failed to load articles.</p>}

        {/* Articles Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {articles.map((article) => (
            <Card
              key={article.id}
              className="flex-shrink-0 w-80 group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={`https://www.wowpetspalace.com/dashboard/${article.image}`}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(article.categoryName)} border-0`}>
                      {article.categoryName}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg text-foreground leading-tight line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: article.description }}
                  />

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>WowPetsPalace</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>~5 min read</span>
                      </div>
                    </div>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-primary hover:text-primary hover:bg-primary/10 group/btn"
                  >
                    Read Article
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
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
