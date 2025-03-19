import HeroSection from "@/sections/HeroSection/HeroSection";
import InfoSection from "@/sections/InfoSection/InfoSection";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/sections/servicesSection/ServicesSections";
import { infoItems, mainData, services } from "@/data/data";
import Image from "next/image";
import DreamCountrySection from "@/sections/DreamCountrySection/DreamCountrySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection backgroundImage="/images/camilo-botia.jpg" height="88vh" title={mainData?.ctaMainHeading} />
      <InfoSection items={infoItems} />
      <ServicesSection items={services} />
      <DreamCountrySection />
    </>
  );
}
