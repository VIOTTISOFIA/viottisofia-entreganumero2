import './App.css'
//REACT-ROUTER-DOM 
import { BrowserRouter, Routes, Route} from 'react-router-dom';

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
  const [carrito, setCarrito] = useState ([]);
  
  const user = "sofia";
  const edad = 27;


  return (

      <div className='App'>
        <CartContext.Provider value= {{user, edad }}>
      <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element= { <ItemListContainer/> } />
        <Route path='/item/:id' element= {<ItemDetailContainer/>} />
        <Route path='/productos/:category' element= {<ItemListContainer/>} />
        <Route path='/aboutPage' element= {<AboutPage/>} />
        <Route path='/contactPage' element= { <ContactPage/> } />
        <Route path='/errorPage' element= { <ErrorPage/> } />
        <Route path='/homePage' element= { <HomePage/> } />

      </Routes>
      </BrowserRouter>
      </CartContext.Provider>
  

    </div>

  )
}

export default App;
