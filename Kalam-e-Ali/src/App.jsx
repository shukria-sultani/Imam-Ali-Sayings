import { useState } from 'react'
import Hero from './Components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.min.js';
import CategoryButtons from './Components/CategoryButtons';
import ContentNavigator from './Components/ContentNavigator';
import Content from './Components/Content';
import Footer from './Components/Footer';
function App() {
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
