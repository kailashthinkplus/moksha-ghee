import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import FlavorSection from "@/components/sections/FlavorSection";
import ProductSection from "@/components/sections/ProductSection"; 
import NutritionSection from "@/components/sections/NutritionSection";
import RecipeSection from "@/components/sections/RecipeSection";
import TrustBadgeSection from "@/components/sections/TrustBadgeSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FlavorSection />
      <ProductSection />
      <NutritionSection />
      <RecipeSection />
      <TrustBadgeSection />
      <Footer />
    </>
  );
}