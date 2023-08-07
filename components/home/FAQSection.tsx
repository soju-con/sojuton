import { FaqList } from "@/const/faqList";
import React from "react";

const FAQSection = () => {
  return (
    <section id="faq" className="pt-14">
      <div className="max-w-4xl p-4 my-16 mx-auto">
        <div className="flex flex-col gap-16 text-center">
          <h2 className="font-climate-crisis text-5xl">FAQ</h2>
          <div>
            <div className="join join-vertical w-full text-left">
              {FaqList.map(({ question, answer }, index) => (
                <div
                  key={index}
                  className="collapse collapse-arrow join-item border border-base-300"
                >
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    {question}
                  </div>
                  <div className="collapse-content break-keep">
                    <p>{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
