import { Mail } from "lucide-react";
import Link from "next/link";

const SocialList = [
  {
    name: "이메일",
    icon: <Mail />,
    href: "mailto:soujucon.community@gmail.com",
  },
];

const EmailSection = () => {
  return (
    <section className="p-4 min-h-[50vh]">
      <div className="max-w-4xl p-8 my-16 mx-auto bg-base-200 rounded-xl">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-climate-crisis text-5xl">Social</h2>
          <p>더 궁금한 사항이 있으면 아래로 연락주세요!</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {SocialList.map(({ name, icon, href }) => (
              <Link key={name} href={href}>
                <button className="btn btn-outline">
                  {icon}
                  {name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
