import './App.css'
//REACT-ROUTER-DOM 
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

//COMPONENTES 
import Header from "./Components/Header/Header";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


//PAGES 
import HomePage from './Components/pages/HomePage/HomePage';
import AboutPage from './Components/pages/AboutPage/AboutPage';
import ContactPage from './Components/pages/ContactPage/ContactPage';
import ErrorPage from './Components/pages/ErrorFile/ErrorPage';
import ItemDetailContainer from './Components/Header/ItemDetailContainer/ItemDetailContainer';



function App  ()  {

  return (

      <div className='App'>
      <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element= { <ItemListContainer/> } />
        <Route path='/item' element= {<ItemDetailContainer ItemId={2}/>} />
        <Route path='/aboutPage' element= {<AboutPage/>} />
        <Route path='/contactPage' element= { <ContactPage/> } />
        <Route path='/errorPage' element= { <ErrorPage/> } />
        <Route path='/homePage' element= { <HomePage/> } />


      </Routes>
  
      </BrowserRouter>
  

    </div>

  )
}

export default App;
