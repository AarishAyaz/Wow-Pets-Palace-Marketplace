import { Search, Mic, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from "./ProductCard";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ScrollArea } from './ui/scroll-area';
import { useEffect, useState } from 'react';
import axios from "axios";

interface Product {
  id: string;
  name: string;
  featured_image: string;
  original_price: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  categoryTitle: string;
}

export function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const itemsPerPage = 12;

  // 📌 Fetch Data From API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://www.wowpetspalace.com/test/product/getallFeaturedProduct"
        );

        const mapped = data.result.map((item: any) => ({
          id: item.id,
    name: item.name,
    featured_image: `https://www.wowpetspalace.com/test/${item.featured_image}`,
    original_price: item.original_price,
    discountPercentage: item.discountPercentage ?? 0,
    rating: item.overall_rating ?? 0,
    reviewsCount: item.reviewsCount ?? 0,
    categoryTitle: item.categoryTitle,
        }));

        setProducts(mapped);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  // 📌 Pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">

        {/* Page Title */}
        <div className="text-center space-y-4 pt-8 pb-8">
          <h1 className="text-primary">Shop Pet Products</h1>
          <h2 className="text-muted-foreground max-w-3xl mx-auto">
            Find the perfect food, toys, treats, and accessories for your pet.
          </h2>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search pet foods, toys, treats, accessories…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-6 rounded-full border-2 border-primary/20 focus:border-primary bg-card shadow-lg focus:shadow-xl transition-all duration-300"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hover:bg-primary/10"
            >
              <Mic className="w-5 h-5 text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">

          {displayedProducts.map((product) => (
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

      </main>

    </div>
  );
}
