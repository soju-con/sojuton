import { SponsorList } from "@/const/sponsorList";
import Image from "next/image";

const SponsorSection = () => {
  return (
    <section>
      <div className="max-w-4xl p-4 my-16 mx-auto">
        <div className="flex flex-col gap-16 text-center min-h-[50vh] justify-center">
          <h2 className="font-climate-crisis text-5xl">Sponsors</h2>
          <ul className="flex flex-row flex-wrap gap-8 justify-center">
            {SponsorList.map(({ name, image }) => (
              <li
                key={name}
                className="hover:scale-125 transition-transform flex flex-col justify-center"
              >
                <Image alt={name} src={image} className="max-w-[224px]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
