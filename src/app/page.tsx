import { HeroSection, AppHeader, Features, AppFooter } from "@/components";
import { ValidatePublicAuth } from "@/components/ValidatePublicAuth";

export default function Home() {
  return (
    <ValidatePublicAuth>
      <div className="bg-white dark:bg-gray-900">
        <AppHeader />
        <HeroSection />
        <Features />
        <AppFooter />
      </div>
    </ValidatePublicAuth>
  );
}
