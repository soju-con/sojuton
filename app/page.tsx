import SocialSection from "@/components/home/SocialSection";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import LocationSection from "@/components/home/LocationSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import SponsorSection from "@/components/home/SponsorSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ScheduleSection />
      <SponsorSection />
      <LocationSection />
      <FAQSection />
      <SocialSection />
    </div>
  );
};

export default HomePage;
