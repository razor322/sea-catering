import Layout from "./components/layout/layout";
import FeatureSection from "./components/sections/home/FeatureSection";
import { HeroSection } from "./components/sections/home/HeroSection";
import TestimonialsSection from "./components/sections/home/TestimonialsSection";
import SubscriptionPromoSection from "./components/sections/home/SubscriptionPromoSection";
import MenuHighlightSection from "./components/sections/home/MenuHighlightSection";
export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <MenuHighlightSection />
      <SubscriptionPromoSection />
      <FeatureSection />
      <TestimonialsSection />
    </Layout>
  );
}
