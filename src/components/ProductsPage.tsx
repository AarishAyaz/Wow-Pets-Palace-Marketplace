import { Search, Mic } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  tags: any;
  id: string;
  name: string;
  featured_image: string;
  original_price: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  categoryTitle: string;
}

interface Category {
  id: string;
  title: string;
  productCount: number;
}

export function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const itemsPerPage = 12;

  /* ---------------- Fetch Products ---------------- */
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

  /* ---------------- Fetch Categories ---------------- */
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          "https://www.wowpetspalace.com/test/subCategory/getCountCategoryProduct"
        );

        const mapped = data.result.map((item: any) => ({
          id: item.category_id,
          title: item.category_name,
          productCount: item.product_count,
        }));

        setCategories(mapped);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const { data } = await axios.get(
          "https://www.wowpetspalace.com/test/shop/shopTags"
        );
        setTags(data);
      } catch (error) {
        console.error("Error fetching tags", error);
      }
    };
    fetchTags();
  }, []);

  /* ---------------- Filtering ---------------- */
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory
      ? product.categoryTitle === selectedCategory
      : true;
    const matchesPrice =
      (minPrice === null || product.original_price >= minPrice) &&
      (maxPrice === null || product.original_price <= maxPrice);

    const matchesTags =
      selectedTags.length === 0 ||
      product.tags?.some((tag: string) => selectedTags.includes(tag));

    return matchesSearch && matchesCategory && matchesPrice && matchesTags;
  });

  /* ---------------- Pagination ---------------- */
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center space-y-4 pt-8 pb-8">
          <h1 className="text-primary">Shop Pet Products</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Find the perfect food, toys, treats, and accessories for your pet.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search pet foods, toys, treats, accessories…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-12 py-6 rounded-full"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <Mic className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* -------- Left Sidebar: Categories -------- */}
          <aside className="w-80 shrink-0">
            <div className="bg-card rounded-xl border p-6 sticky top-24 flex flex-col gap-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-base mb-3">Categories</h3>
                <ScrollArea className="h-[220px] pr-2">
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                          selectedCategory === null
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        All Categories
                      </button>
                    </li>

                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => setSelectedCategory(category.title)}
                          className={`w-full flex justify-between px-3 py-2 rounded-md text-sm font-medium ${
                            selectedCategory === category.title
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted"
                          }`}
                        >
                          <span>{category.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {category.productCount}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Filter by Price</h4>
                <div className="flex gap-2 mb-3">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={minPrice ?? ""}
                    onChange={(e) =>
                      setMinPrice(
                        e.target.value === "" ? null : Number(e.target.value)
                      )
                    }
                    className="w-1/2"
                  />
                  <Input
                    type="number"
                    placeholder="Max"
                    value={maxPrice ?? ""}
                    onChange={(e) =>
                      setMaxPrice(
                        e.target.value === "" ? null : Number(e.target.value)
                      )
                    }
                    className="w-1/2"
                  />
                </div>
                <Button
                  variant="outline"
                  className="w-full py-2"
                  onClick={() => {
                    setMinPrice(null);
                    setMaxPrice(null);
                    setCurrentPage(1);
                  }}
                >
                  Clear Price
                </Button>
              </div>

              {/* Tags Filter */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Filter by Tags</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => {
                        if (selectedTags.includes(tag.name)) {
                          setSelectedTags(
                            selectedTags.filter((t) => t !== tag.name)
                          );
                        } else {
                          setSelectedTags([...selectedTags, tag.name]);
                        }
                        setCurrentPage(1); // reset pagination when filter changes
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200 ${
                        selectedTags.includes(tag.name)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted text-muted-foreground border-transparent hover:bg-muted/70"
                      }`}
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
                {selectedTags.length > 0 && (
                  <Button
                    variant="outline"
                    className="w-full py-2"
                    onClick={() => setSelectedTags([])}
                  >
                    Clear Tags
                  </Button>
                )}
              </div>
            </div>
          </aside>

          {/* -------- Products Grid -------- */}
          <section className="lg:col-span-9">
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
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
          </section>
        </div>
      </main>
    </div>
  );
}
