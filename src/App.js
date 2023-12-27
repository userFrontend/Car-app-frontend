import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import Cars from './pages/Cars/Cars';
import Auth from './pages/Auth/Auth';


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={currentUser ? <Home/> : <Auth/>}/>
          <Route path='/category' element={currentUser ? <Category/> : <Auth/>}/>
          <Route path='/cars' element={currentUser ? <Cars/> : <Auth/>}/>
          <Route path='/account' element={currentUser ? <Account/> : <Auth/>}/>
        </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
