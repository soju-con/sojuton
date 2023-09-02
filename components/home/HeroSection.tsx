import { HandMetal } from "lucide-react";
import Link from "next/link";
import DdayIndicator from "../DdayIndicator";

const HeroSection = () => {
  return (
    <section className="hero min-h-[45vh] mt-16 sm:min-h-[70vh] bg-white pt-16">
      <div className="hero-content w-full max-w-4xl">
        <div className="flex flex-col gap-8 font-black w-full">
          <div className="chat chat-start w-full">
            <h3 className="text-2xl font-bold chat-header">
              2023. 09. 02 BUSAN
            </h3>
            <h1 className="text-7xl sm:text-[108px] md:text-[150px] text-white p-8 chat-bubble chat-bubble-primary">
              소주톤
            </h1>
            <p className="chat-footer opacity-50">소문난 주니어에게 보냄</p>
          </div>
          <div className="chat chat-end">
            <Link
              href={"https://festa.io/events/3827"}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-bubble chat-bubble-secondary"
            >
              <button className="btn btn-secondary btn-lg text-xl text-white hover:scale-110">
                <HandMetal />
                얼레벌레 하실분?
              </button>
            </Link>
            <p className="chat-footer opacity-50">버튼을 눌러 참여하기!</p>
          </div>
          <div className="chat chat-start">
            <div className="text-lg text-white font-semibold flex flex-col justify-start chat-bubble chat-bubble-primary">
              <p>얼레벌레 바캉스 시작!</p> <DdayIndicator />
            </div>
            <p className="chat-footer opacity-50">엘리스 Lab 부산점에서!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
