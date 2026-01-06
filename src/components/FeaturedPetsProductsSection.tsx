// import { Button } from './ui/button';
// import { Card, CardContent } from './ui/card';
// import { Badge } from './ui/badge';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { ShoppingCart, Star } from 'lucide-react';

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   originalPrice: number;
//   discountedPrice: number;
//   discountPercentage: number;
//   rating: number;
//   reviewsCount: number;
//   category: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Premium Dog Food - Chicken & Rice",
//     image: "https://images.unsplash.com/photo-1708746333832-9a8cde4a0cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBmb29kJTIwcHJlbWl1bSUyMGJhZ3xlbnwxfHx8fDE3NTc5NTAwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     originalPrice: 89.99,
//     discountedPrice: 67.49,
//     discountPercentage: 25,
//     rating: 4.8,
//     reviewsCount: 324,
//     category: "Food"
//   },
//   {
//     id: 2,
//     name: "Interactive Plush Squeaky Toy",
//     image: "https://images.unsplash.com/photo-1747228984031-7f1ae2c4befa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjB0b3klMjBwbHVzaCUyMHNxdWVha3l8ZW58MXx8fHwxNzU3OTUwMDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     originalPrice: 24.99,
//     discountedPrice: 17.49,
//     discountPercentage: 30,
//     rating: 4.6,
//     reviewsCount: 189,
//     category: "Toys"
//   },
//   {
//     id: 3,
//     name: "Luxury Comfort Pet Bed",
//     image: "https://images.unsplash.com/photo-1573682127988-f67136e7f12a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBiZWQlMjBjb21mb3J0YWJsZSUyMGx1eHVyeXxlbnwxfHx8fDE3NTc5NTAwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     originalPrice: 129.99,
//     discountedPrice: 97.49,
//     discountPercentage: 25,
//     rating: 4.9,
//     reviewsCount: 567,
//     category: "Bedding"
//   },
//   {
//     id: 4,
//     name: "Adjustable Collar & Leash Set",
//     image: "https://images.unsplash.com/photo-1710683941590-fd4f339f0c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBsZWFzaCUyMGNvbGxhciUyMHNldHxlbnwxfHx8fDE3NTc5NTAwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     originalPrice: 49.99,
//     discountedPrice: 34.99,
//     discountPercentage: 30,
//     rating: 4.7,
//     reviewsCount: 298,
//     category: "Accessories"
//   },
//   {
//     id: 5,
//     name: "Professional Grooming Brush",
//     image: "https://images.unsplash.com/photo-1557873443-a6d8870b1768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZyUyMGJydXNoJTIwdG9vbHxlbnwxfHx8fDE3NTc5NTAwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     originalPrice: 39.99,
//     discountedPrice: 27.99,
//     discountPercentage: 30,
//     rating: 4.5,
//     reviewsCount: 156,
//     category: "Grooming"
//   },
//   {
//     id: 6,
//     name: "Organic Training Treats",
//     image: "https://images.unsplash.com/photo-1714846624589-bae6531e86e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjB0cmVhdHMlMjBoZWFsdGh5JTIwc25hY2tzfGVufDF8fHx8MTc1Nzk1MDAzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     originalPrice: 19.99,
//     discountedPrice: 13.99,
//     discountPercentage: 30,
//     rating: 4.8,
//     reviewsCount: 423,
//     category: "Treats"
//   }
// ];

// export function FeaturedPetsProductsSection() {
//   return (
//     <section className="py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
//             Featured Pets & Products
//           </Badge>
//           <h2 className="mb-4 text-primary">Premium Pet Products</h2>
//           <p className="max-w-2xl mx-auto text-muted-foreground">
//             Discover our handpicked selection of premium pet products with exclusive discounts. 
//             Everything your furry friends need for a happy and healthy life.
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
//           {products.map((product) => (
//             <Card key={product.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//               <div className="relative">
//                 {/* Product Image */}
//                 <div className="aspect-[4/3] overflow-hidden bg-gray-50">
//                   <ImageWithFallback
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
                
//                 {/* Discount Badge */}
//                 <Badge 
//                   variant="destructive" 
//                   className="absolute top-2 left-2 text-xs bg-destructive text-destructive-foreground"
//                 >
//                   {product.discountPercentage}% OFF
//                 </Badge>

//                 {/* Category Badge */}
//                 <Badge 
//                   className="absolute top-2 right-2 text-xs bg-primary/10 text-primary border-primary/20"
//                 >
//                   {product.category}
//                 </Badge>
//               </div>

//               <CardContent className="p-3 lg:p-4">
//                 {/* Product Name */}
//                 <h3 className="mb-2 text-primary line-clamp-2 text-sm lg:text-base">{product.name}</h3>

//                 {/* Rating */}
//                 <div className="flex items-center gap-1 mb-3">
//                   <div className="flex items-center gap-0.5">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`w-3 h-3 ${
//                           i < Math.floor(product.rating)
//                             ? 'fill-secondary text-secondary'
//                             : 'text-gray-300'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                   <span className="text-xs text-muted-foreground hidden sm:inline">
//                     {product.rating} ({product.reviewsCount})
//                   </span>
//                 </div>

//                 {/* Pricing */}
//                 <div className="mb-3">
//                   <div className="flex items-center gap-2 mb-1">
//                     <span className="text-lg lg:text-xl font-semibold text-primary">
//                       ${product.discountedPrice}
//                     </span>
//                     <span className="text-sm text-muted-foreground line-through">
//                       ${product.originalPrice}
//                     </span>
//                   </div>
//                   <span className="text-xs text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">
//                     Save ${(product.originalPrice - product.discountedPrice).toFixed(2)}
//                   </span>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <Button 
//                   className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-md group text-xs lg:text-sm"
//                   size="sm"
//                 >
//                   <ShoppingCart className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
//                   Add to Cart
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* View All Products Button */}
//         <div className="text-center mt-12">
//           <Button 
//             variant="outline" 
//             size="lg" 
//             className="border-primary/20 text-primary hover:bg-primary/5 px-8"
//           >
//             View All Products
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, Star } from 'lucide-react';
import {ProductCard} from "./ProductCard";

interface Product {
  id: number;
  name: string;
  featured_image: string;
  original_price: number;
  discountPercentage: number;
 rating?: number | null;
  reviewsCount?: number | null;
   categoryTitle: string;
}

 
const fetchFeaturedProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('https://www.wowpetspalace.com/test/product/getallFeaturedProduct');
  return data.result.map((item: any) => ({
    id: item.id,
    name: item.name,
    featured_image: `https://www.wowpetspalace.com/test/${item.featured_image}`,
    original_price: item.original_price,
    discountPercentage: item.discountPercentage ?? 0,
    rating: item.overall_rating ?? 0,
    reviewsCount: item.reviewsCount ?? 0,
    categoryTitle: item.categoryTitle,
  }));
};

 

export function FeaturedPetsProductsSection() {

  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: fetchFeaturedProducts,
  });

   if (isLoading) return <p className="text-center py-16">Loading featured products...</p>;
  if (isError) return <p className="text-center py-16 text-destructive">Failed to load products.</p>;

 return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
            Featured Pets & Products
          </Badge>
          <h2 className="mb-4 text-primary">Premium Pet Products</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Discover our handpicked selection of premium pet products with exclusive discounts. 
            Everything your furry friends need for a happy and healthy life.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.featured_image}
            price={product.original_price}
            originalPrice={product.original_price}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            category={product.categoryTitle}
          />
        ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/20 text-primary hover:bg-primary/5 px-8"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}