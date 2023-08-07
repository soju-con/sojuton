import MapScreenshot from "@/assets/images/map-screenshot.png";
import { Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LocationSection = () => {
  return (
    <section id="location" className="bg-base-200 pt-14">
      <div className="hero max-w-5xl p-4 my-16 mx-auto min-h-[75vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left basis-1/2 flex flex-col justify-center">
            <h1 className="text-5xl font-bold font-climate-crisis">Location</h1>
            <p className="py-6 text-center">
              엘리스 Lab 부산점 <br />
              부산 해운대구 센텀동로 41 센텀벤처타운 6층
            </p>
            <div className="text-center">
              <Link
                href="https://naver.me/59NMqaf5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary">
                  <Navigation />길 찾기
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden">
            <Link
              href="https://naver.me/59NMqaf5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="엘리스 Lab 부산점 부산 해운대구 센텀동로 41 센텀벤처타운 6층"
                src={MapScreenshot}
                className="hover:scale-110 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
