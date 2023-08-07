import React from "react";

const IntroSection = () => {
  return (
    <section>
      <div className="max-w-4xl p-4 my-8 mx-auto">
        <div className="mockup-window border bg-blue-500">
          <div className="flex flex-col gap-8 justify-center px-4 py-16 bg-blue-600 text-white text-center break-keep">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-10">
              ⛵ 2회 소주톤의 주제는{" "}
              <strong className="font-climate-crisis">얼레벌레바캉스</strong>
              입니다!
            </h2>
            <p className="text-lg leading-8">
              누구나 감탄할 수 있는 결과물을 만들어 내는 것도 좋지만, <br />{" "}
              시간 제한이 있는 해커톤에서 대단한 수준의 서비스를 기획, 디자인,
              개발하기는 어렵습니다. <br /> 그렇기에 소주톤은 주니어 여러분의
              성장을 위한 협업과 네트워킹의 기회를 만들고자 합니다. <br />
              해커톤으로 그 계기를 만들고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
