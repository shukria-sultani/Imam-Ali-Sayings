import { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// components
import CategoryButtons from "./Components/CategoryButtons";
import ContentNavigator from "./Components/ContentNavigator";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

// data
import namah from "./data/namah";
import khutbah from "./data/khutbah";
import hekmat from "./data/hekmat";

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentContentList, setCurrentContentList] = useState([]);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const defaultCategory = "خطبه ها";
    setActiveCategory(defaultCategory);
    setCurrentContentList(khutbah);
  }, []);

  function changeCategory(categoryName) {
    setActiveCategory(categoryName);
    switch (categoryName) {
      case "خطبه ها":
        setCurrentContentList(khutbah);
        break;
      case "نامه ها":
        setCurrentContentList(namah);
        break;
      case "حکمت ها":
        setCurrentContentList(hekmat);
        break;
    }
    setCurrentContentIndex(0);
  }
  function handleNext() {
    setCurrentContentIndex((prevIndex) =>
      prevIndex < currentContentList.length - 1 ? prevIndex + 1 : prevIndex
    );
  }
  function handleBack() {
    setCurrentContentIndex((prevIndex) => {
      prevIndex > 0 ? prevIndex - 1 : prevIndex;
    });
  }

  const displayedContent =
    currentContentList.length > 0
      ? currentContentList[currentContentIndex]
      : null;

  return (
    <>
      <Hero></Hero>
      <CategoryButtons
        activeCategory={activeCategory}
        onCategoryClick={changeCategory}
      ></CategoryButtons>
      <ContentNavigator
        currentNumber={currentContentIndex + 1}
        totalNumber={currentContentList.length}
        onNext={handleNext}
        onBack={handleBack}
      ></ContentNavigator>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default App;
