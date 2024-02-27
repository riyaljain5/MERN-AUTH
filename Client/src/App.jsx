
import './App.css'
import  {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';

axios.defaults.baseURL="http://localhost:8000"
axios.defaults.withCredentials=true
function App() {
  return (
    <>
      <Navbar/>
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App;
