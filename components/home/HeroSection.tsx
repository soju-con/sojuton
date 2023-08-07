import React from "react";

const HeroSection = () => {
  return (
    <section className="hero min-h-screen bg-white">
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">2023. 09. 02 BUSAN</h3>
          <h1 className="text-[150px] font-black">소주톤</h1>
          <p className="text-xl text-gray-500">얼레벌레 바캉스</p>
          <div>
            <button className="btn btn-primary">얼레벌레 하실분?</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
