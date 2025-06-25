import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero-container container-fluid">
        <h1 className="hero-title p-5">کلام علی</h1>
        <div className=" d-flex  align-items-center flex-column">
          <h2 className="welcome-message display-4">
            به <span>کلام علی</span> خوش آمدید
          </h2>
          <span className="hero-span text-center">
               در  <span>کلام علی</span> برگزیده های نهج البلاغه را مطالعه نمایید.<br />
            با مطالعه نهج البلاغه از مطالعه ده ها کتاب دیگر بی نیاز شوید! 
         
          </span>
        </div>
        <div className="row justify-content-center ps-3 pe-3">
          <div className="hero-hekmat pt-5 pb-5 p-3 col-md-8 col-lg-6 mt-5">
            <p>
               خوشا به حال كسى كه به ياد معاد باشد، براى حسابرسى قيامت كار كند،
              با قناعت زندگى كند، و از خدا راضى باشد.
            </p>
            <span className="pt-3 pb-3 pt-3 pb-3">حکمت 44 </span>
          </div>
        </div>
      </div>
    </>
  );
}
