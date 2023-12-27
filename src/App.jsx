import './App.css'
//REACT-ROUTER-DOM 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//COMPONENTES 
import Header from "./Components/Header/Header";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContairner"

//PAGES 
import HomePage from './Components/pages/HomePage/HomePage';
import AboutPage from './Components/pages/AboutPage/AboutPage';
import ContactPage from './Components/pages/ContactPage/ContactPage';
import ErrorPage from './Components/pages/ErrorFile/ErrorPage';
import ItemDetailContainer from './Components/pages/ItemDetailContainer.jsx/ItemDetailContainer';


const App = () =>  {

  return (
  <Router>
      <div className='App'>
      <Header/>
      <NavBar/>
  
    <Routes>
      <Route path="/" element ={<HomePage/>}/>
      <Route path="/about" element ={<AboutPage/>}/>
      <Route path="/contact" element ={<ContactPage/>}/>
      <Route path="/*" element ={<ErrorPage/>}/>
      <Route path="/detail/:id" element ={<ItemDetailContainer/>}/>
    </Routes>
    </div>
  </Router>
    

  )
}

export default App;
