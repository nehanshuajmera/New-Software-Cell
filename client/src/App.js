import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import { Route, Routes } from "react-router-dom";
import Contact from './Pages/Contactus/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/contact' element={<Contact/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
