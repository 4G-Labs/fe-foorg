import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Staking from "@/components/Staking";
import NFTShowcase from "@/components/NFTShowcase";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Staking />
      <NFTShowcase />
      <HowItWorks />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
