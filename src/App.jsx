import './App.css'
import React, {lazy, Suspense} from "react"
// import Details from "./components/Details";
import Header from "./components/Header";
import Spinner from './components/Spinner';
import Footer from './components/Footer';
const Details = lazy(()=> import("./components/Details"));


function App() {


  return (
    <>
    <Header/>
    <Suspense fallback={<Spinner/>}>
    <Details/>
    </Suspense>
    {/* <Footer/> */}
    </>
  )
}

export default App
