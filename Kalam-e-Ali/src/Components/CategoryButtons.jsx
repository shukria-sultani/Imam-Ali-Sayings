import React, { useState } from "react";
import CategoryDropdown from "./CategoryDropdown";

export default function CategoryButtons() {
  const inactiveStyle = {
    backgroundColor: "#FFC236",
    boxShadow: " 4px 4px 6px rgba(58, 187, 82, 0.7)",
    border: "none",
    outline: "one",
    fontSize: "x-large",
  };
  const activeStyle = {
    backgroundColor: "#40C057",
    boxShadow: "none",
    border: "none",
    outline: "one",
    fontSize: "x-large",
    transition: "2s"
  };

  let [activeCategory, setActiveCategory] = useState(null);

  function handleCategroyClick(category) {
    setActiveCategory(category);
  }

  return (
    <>
      <div className="container w-100 category-buttons mt-5  pt-5 d-flex flex-row gap-2 ">
        <button
          className="btn p-2 ps-lg-5  ms-sm-3 pe-lg-5 ps-sm-3 pe-sm-5 btn-lg "
          onClick={() => handleCategroyClick("نامه ها")}
          style={activeCategory === "نامه ها" ? activeStyle : inactiveStyle}
        >
          نامه ها
        </button>
        <button
          className="btn p-2 ps-lg-5  ms-sm-3 pe-lg-5 ps-sm-3 pe-sm-5 btn-lg "
          onClick={() => handleCategroyClick("خطبه ها")}
          style={activeCategory === "خطبه ها" ? activeStyle : inactiveStyle}
        >
          خطبه ها{" "}
        </button>
        <button
          className="btn p-2 ps-lg-5 ms-sm-3  pe-lg-5 ps-sm-3 pe-sm-5 btn-lg "
          onClick={() =>handleCategroyClick ("حکمت ها")}
          style={activeCategory === "حکمت ها" ? activeStyle : inactiveStyle}
        >
          حکمت ها
        </button>
        <div className="dropdown">
           <CategoryDropdown></CategoryDropdown>
          
        </div>
   
      </div>
    </>
  );
}
