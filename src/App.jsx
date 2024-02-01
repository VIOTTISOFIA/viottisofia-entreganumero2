import './App.css'
//REACT-ROUTER-DOM 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';

//COMPONENTES 
import Header from "./Components/Header/Header";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetail from './Components/ItemDetail/ItemDetail';
import itemCounter from './Components/itemCounter/itemCounter';
import ItemList from './Components/ItemList/ItemList';

//PAGES 
import HomePage from './Components/pages/HomePage/HomePage';
import AboutPage from './Components/pages/AboutPage/AboutPage';
import ContactPage from './Components/pages/ContactPage/ContactPage';
import ErrorPage from './Components/pages/ErrorFile/ErrorPage';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './Components/Carrito/Carrito';
import Checkout from './Components/Checkout/Checkout';



function App  ()  {

  

  return (

      <div className='App'>
        <CartProvider>
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
        <Route path='/carrito' element= { <Carrito/> } />
        <Route path='/checkout' element= { <Checkout/> } />

      </Routes>
      </BrowserRouter>
      </CartProvider>
  

    </div>

  )
}

export default App;
