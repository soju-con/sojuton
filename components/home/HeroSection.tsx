import { HandMetal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero h-[45vh] mt-16 sm:h-[70vh] bg-white">
      <div className="hero-content text-center max-w-7xl">
        <div className="flex flex-col gap-8 font-climate-crisis">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">2023. 09. 02 BUSAN</h3>
            <h1 className="text-7xl sm:text-[108px] md:text-[150px] font-black bg-gradient-to-b from-blue-100 to-blue-600 bg-clip-text text-transparent">
              소주톤
            </h1>
            <p className="text-xl">얼레벌레 바캉스</p>
          </div>
          <div>
            <button className="btn btn-primary text-white">
              <HandMetal />
              얼레벌레 하실분?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
