import React from "react";

export default function Content({itemData}) {
  if(!itemData){
    return null
  }
  return (
    <>
      <div className="container content">
        <div className="kalam-category p-3 ">
          <span className="fs-3 fw-bold"> {itemData.title}   </span> <span className="fs-3 fw-bold">{itemData.category}</span>
        </div>
        <div className="content-container pt-4 p-3">
          <p className="fs-4">
            {itemData.text}
          </p>
        </div>
      </div>
    </>
  );
}
