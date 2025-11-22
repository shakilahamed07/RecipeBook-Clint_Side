import React from "react";

const FaqSection = () => {
  return (
    <div className="">
        <h1 className="text-3xl lg:mt-20 text-center font-bold">FAQ Section</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-base-100 p-8 md:p-10 space-y-8 md:space-y-0 mb-10 rounded-2xl mx-2">
        {/* Left - Image and person info */}
        <div className="relative w-full lg:w-1/2">
          <img
            src="https://i.ibb.co.com/TMLdD7NL/Screenshot-2025-11-22-230848-removebg-preview.png" // Replace with actual image path
            alt=""
            className="rounded-xl mx-auto"
          />
        </div>

        {/* Right - Case study content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="collapse bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm">
            Enter email and click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
            </div>
          </div>
          <div className="collapse bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title font-semibold">
            Can I public my recipe?
            </div>
            <div className="collapse-content text-sm">
            Yes.

            </div>
          </div>
          <div className="collapse bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title font-semibold">
              How do I update my recipe information?
            </div>
            <div className="collapse-content text-sm">
              Go to "My recipe page" and Edit your information then click update recipe button.
            </div>
          </div>
          <div className="collapse bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title font-semibold">
              How do add recipe?
            </div>
            <div className="collapse-content text-sm">
              Go to "add recipe" and all information add and submit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
