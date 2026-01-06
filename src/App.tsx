import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SearchSection } from './components/SearchSection';
import { CategoryChips } from './components/CategoryChips';
import { FeaturedProductSection } from './components/FeaturedProductSection';
import { FeaturedPetsProductsSection } from './components/FeaturedPetsProductsSection';
import { ShelterSection } from './components/ShelterSection';
import { BreedsSection } from './components/BreedsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { FeaturedBanner } from './components/FeaturedBanner';
import { ContentFeed } from './components/ContentFeed';
import { AboutUsSection } from './components/AboutUsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProductsPage } from './components/ProductsPage';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products'>('home');

  const navigateTo = (page: 'home' | 'products') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {currentPage === 'home' && (
          <>
            <HeroSection onNavigateToProducts={() => navigateTo('products')} />
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
        )}

        {currentPage === 'products' && (
          <ProductsPage />
        )}
      </main>

      <Footer />
    </div>
  );
}


