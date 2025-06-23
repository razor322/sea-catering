import Layout from "./components/layout/layout";
import FeatureSection from "./components/sections/FeatureSection";
import { WelcomeSection } from "./components/sections/WelcomeSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
export default function HomePage() {
  return (
    <Layout>
      <WelcomeSection />
      <HeroSection />
      <FeatureSection />
      <ContactSection />
    </Layout>
  );
}
