import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CulturalStorySection from './components/CulturalStorySection';
import ProblemSection from './components/ProblemSection';
import ProductsSection from './components/ProductsSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import UrgencySection from './components/UrgencySection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Brownie Saldanha - Brownies Autênticos do Brasil no Porto';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Brownies autênticos brasileiros no Porto. Feitos com receitas tradicionais do Rio e ingredientes premium portugueses. Entrega rápida via Glovo em 30 minutos.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Bakery",
      "name": "Brownie Saldanha",
      "description": "Brownies autênticos brasileiros no Porto",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua das Flores, 123",
        "addressLocality": "Porto",
        "postalCode": "4000-123",
        "addressCountry": "PT"
      },
      "telephone": "+351912345678",
      "openingHours": "Tu-Su 10:00-22:00",
      "servesCuisine": "Brazilian",
      "priceRange": "€€",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head?.appendChild(script);

    return () => {
      document.head?.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CulturalStorySection />
        <ProblemSection />
        <ProductsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <UrgencySection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default LandingPage;