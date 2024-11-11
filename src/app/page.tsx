import { HeroSection, AppHeader, Features, AppFooter } from "@/components";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <AppHeader />
      <HeroSection />
      <Features />
      <AppFooter />
    </div>
  );
}
