import './App.css'
//REACT-ROUTER-DOM 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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



const App = () =>  {

  return (

      <div className='App'>
      <Header/>
      <NavBar/>
      <ItemListContainer/> 
      <ItemDetailContainer ItemId={2}/>
  

    </div>

  )
}

export default App;
