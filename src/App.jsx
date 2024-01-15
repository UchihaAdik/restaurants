import {Routes,Route} from "react-router-dom"
import  Layout from "./Layout"
import HomePage from "./pages/HomePage"
import PagePizza from "./pages/PagePizza"
import PageRolls from "./pages/PageRolls"
import PageSalads from "./pages/PageSalads"
import PageWok from "./pages/PageWok"
import PageSushi from "./pages/PageSushi"
import PageSet from "./pages/PageSet"
import PageSup from "./pages/PageSup"
import PageCornDog from "./pages/PageCornDog"
import PageDrink from "./pages/PageDrink"
import PageDiscaunt from "./pages/PageDiscaunt"


import './App.css'



function App() {
  
  return (
    <>

    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route  path="/" element={<HomePage/>}/>
        <Route  path="/pagepizza" element={<PagePizza/>}/>
        <Route  path="/pageset" element={<PageSet/>}/>
        <Route  path="/pagewok" element={<PageWok/>}/>
        <Route  path="/pagerolls" element={<PageRolls/>}/>
        <Route  path="/pagesushi" element={<PageSushi/>}/>
        <Route  path="/pagesalads" element={<PageSalads/>}/>
        <Route  path="/pagesup" element={<PageSup/>}/>
        <Route  path="/pagecorndog" element={<PageCornDog/>}/>
        <Route  path="/pagedrink" element={<PageDrink/>}/>
        <Route  path="/pagediscaunt" element={<PageDiscaunt/>}/>
      </Route>
    </Routes>
    
    </>
  )
}

export default App
