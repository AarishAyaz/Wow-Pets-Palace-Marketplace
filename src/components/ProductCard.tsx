import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number | string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number | null;
  reviewsCount?: number | null;
  category?: string;
}

export function ProductCard({
  id,
  name,
  image,
  price,
  originalPrice,
  discountPercentage = 0,
  rating = 0,
  reviewsCount = 0,
  category
}: ProductCardProps) {
  const navigate = useNavigate();
  const discountedPrice =
    discountPercentage > 0
      ? +(price * (1 - discountPercentage / 100)).toFixed(2)
      : price;

  return (
    <Card  onClick={() => navigate(`/product/${id}`)} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-gray-50">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs">
            {discountPercentage}% OFF
          </Badge>
        )}

        {/* Category Badge */}
        {category && (
          <Badge className="absolute top-2 right-2 text-xs bg-primary/10 text-primary border-primary/20">
            {category}
          </Badge>
        )}
      </div>

      <CardContent className="p-3 lg:p-4">
        {/* Name */}
        <h3 className="mb-2 text-primary line-clamp-2 text-sm lg:text-base">{name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating ?? 0)
                    ? "fill-secondary text-secondary"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground hidden sm:inline">
            {rating} ({reviewsCount})
          </span>
        </div>

        {/* Pricing */}
        <div className="mb-3">
          {discountPercentage > 0 ? (
            <>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg lg:text-xl font-semibold text-primary">
                  ${discountedPrice}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice}
                </span>
              </div>
              <span className="text-xs text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">
                Save ${(originalPrice! - discountedPrice).toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-lg lg:text-xl font-semibold text-primary">
              ${price}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 group text-xs lg:text-sm">
          <ShoppingCart className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
