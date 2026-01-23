import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    axios
      .get("https://www.wowpetspalace.com/test/product/getallFeaturedProduct")
      .then((res) => {
        const found = res.data.result.find(
          (p: any) => String(p.id) === String(id)
        );
        setProduct(found);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-muted-foreground">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto py-14 min-h-screen flex items-center">
      <Card className="p-6 lg:p-10 shadow-xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Image */}
          <div className="rounded-xl overflow-hidden bg-muted">
            <img
              src={`https://www.wowpetspalace.com/test/${product.featured_image}`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <CardContent className="p-0 flex flex-col justify-between">
            <div>
              {/* Category */}
              <Badge className="mb-3">
                {product.categoryTitle}
              </Badge>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-secondary fill-secondary"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  4.8 (124 reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-semibold text-primary">
                  ${product.original_price}
                </span>
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                  In Stock
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                Buy Now
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
