import React from "react";

export default function Content({ itemData }) {
  if (!itemData) {
    return null; 
  }

 
  if (typeof itemData.text === "string") {
    return (
      <>
        <div className="container content">
          <div className="kalam-category p-3 ">
            <span className="fs-3 fw-bold"> {itemData.title} </span>{" "}
            <span className="fs-3 fw-bold pe-2"><span>{itemData.type}</span> ({itemData.number})</span> 
          </div>
          <div className="content-container pt-4 p-3">
            <p className="fs-4" style={{ whiteSpace: 'pre-wrap' }}>{itemData.text}</p>
          </div>
        </div>
      </>
    );
  }
  else if (Array.isArray(itemData.text)) {
    const singleTextObject = itemData.text[0]; 

    if (!singleTextObject) {
      return null; 
    }

    const contentSections = [];
    let i = 1;

    while (true) {
      const subTitleKey = `subTitle${i}`;
      const bodyKey = `body${i}`;

      const subTitleVal = singleTextObject[subTitleKey];
      const bodyVal = singleTextObject[bodyKey];

      if (!subTitleVal && !bodyVal) {
        break; 
      }


      contentSections.push(
        <div key={i} style={{ marginBottom: '20px' }}>
          {subTitleVal && <h2 className="fs-3">{subTitleVal}</h2>}
          {bodyVal && <p className="fs-4" style={{ whiteSpace: 'pre-wrap' }}>{bodyVal}</p>}
        </div>
      );
      i++; 
    }

    return (
      <>
        <div className="container content">
          <div className="kalam-category p-3 ">
            <span className="fs-3 fw-bold"> {itemData.title} </span>{" "}
            <span className="fs-3 fw-bold pe-2"><span>{itemData.type}</span> ({itemData.number})</span> 
          </div>
          <div className="content-container pt-4 p-3">
            {contentSections} 
          </div>
        </div>
      </>
    );
  }

  return null; 
}