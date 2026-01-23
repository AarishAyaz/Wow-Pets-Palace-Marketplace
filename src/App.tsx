import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { SearchSection } from "./components/SearchSection";
import { CategoryChips } from "./components/CategoryChips";
import { FeaturedProductSection } from "./components/FeaturedProductSection";
import { FeaturedPetsProductsSection } from "./components/FeaturedPetsProductsSection";
import { ShelterSection } from "./components/ShelterSection";
import { BreedsSection } from "./components/BreedsSection";
import { ArticlesSection } from "./components/ArticlesSection";
import { FeaturedBanner } from "./components/FeaturedBanner";
import { ContentFeed } from "./components/ContentFeed";
import { AboutUsSection } from "./components/AboutUsSection";
import { FAQSection } from "./components/FAQSection";
import { ProductsPage } from "./components/ProductsPage";
import { ProductDetailsPage } from "./components/ProductDetails";

function Home() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <CategoryChips />
      <FeaturedProductSection />
      <FeaturedPetsProductsSection />
      <ShelterSection />
      <BreedsSection />
      <ArticlesSection />
      <FeaturedBanner />
      <ContentFeed />
      <AboutUsSection />
      <FAQSection />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
