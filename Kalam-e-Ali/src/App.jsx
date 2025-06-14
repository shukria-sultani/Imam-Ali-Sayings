import { useEffect, useState } from 'react'
import Hero from './Components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.min.js';

// components
import CategoryButtons from './Components/CategoryButtons';
import ContentNavigator from './Components/ContentNavigator';
import Content from './Components/Content';
import Footer from './Components/Footer';

// data
import namah from "./data/namah";
import khutbah from "./data/khutbah";
import hekmat from "./data/hekmat";




function App() {

  const [activeCategory, setActiveCategory] = useState(null);
  const [currentContentList, setCurrentContentList] = useState([]);
  const[currentContentIndex, setCurrentContentIndex] = useState(0)

  useEffect(() => {
    const defaultCategory = "خطبه ها";
    setActiveCategory(defaultCategory);
    setCurrentContentList(khutbah);  
  }, []);


  return(
    <>
    <Hero></Hero>
    <CategoryButtons></CategoryButtons>
    <ContentNavigator></ContentNavigator>
    <Content></Content>
    <Footer></Footer>
    </>
  )

}

export default App
