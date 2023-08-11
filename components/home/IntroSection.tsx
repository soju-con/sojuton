import React from "react";

const IntroSection = () => {
  return (
    <section>
      <div className="max-w-4xl p-4 my-8 mx-auto min-h-[50vh]">
        <div className="mockup-window border bg-blue-500">
          <div className="flex flex-col gap-8 justify-center px-4 py-16 bg-blue-600 text-white text-center break-keep">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-10">
              🏖️ 2회 소주톤의 주제는{" "}
              <strong className="font-black">얼레벌레바캉스</strong> 입니다!
            </h2>
            <p className="text-lg leading-8">
              2회 소주톤은 주니어 여러분의 성장을 위한 협업과 네트워킹 기회를
              만들기 위한 12시간 해커톤입니다.
              <br />
              지리적 한계를 넘어, 2회 소주톤:얼레벌레바캉스는 사람들이 멋지고,
              풍경이 아름다운 🌊부산🌊에서 진행됩니다.
              <br />
              다들 부산 하면 어떤 단어가 떠오르시나요!
              <br />
              여름, 바다, 휴가, 대선소주..
              <br />
              눈치채셨듯 이번 해커톤의 주제는{" "}
              <strong>&lsquo;바캉스🍹&rsquo;</strong>와 관련된 모든 것입니다.
              <br />
              9월인데 바캉스가 주제라고요?
              <br />
              참가하는 모두에게 바캉스와 같은 휴식과 재충전의 시간을 드리기
              위해서니까 우리 얼레벌레 넘어가요!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
