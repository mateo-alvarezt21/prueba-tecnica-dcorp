import './App.css'
import Header from './components/Header'
import Multimedia from './components/Multimedia'
import HeroList from './components/HeroList'

function App() {
  
  // const path = characters?.data.results[0].thumbnail.path;
  // const pathExtension = path + ".jpg";

  return (
    // <div>
    //   <h1>{characters?.data.results[0].name}</h1>
    //   <img src={pathExtension} alt="" />
    // </div>
    <div>
      <Header/>
      <Multimedia/>
      <HeroList/>
    </div>
    
  )
}

export default App
