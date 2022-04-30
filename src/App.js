import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Inventory from './components/Pages/Inventory/Inventory';
import ManageItems from './components/Pages/ManageItems/ManageItems';
import AddItem from './components/Pages/AddItem/AddItem';
import MyItems from './components/Pages/MyItems/MyItems';
import Blog from './components/Pages/Blog/Blog';
import NotFound from './components/Shared/NotFound/NotFound';
import About from './components/Pages/About/About';

function App() {
  return (
    <div className='bg-slate-100'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/manageitems' element={<ManageItems />}></Route>
        <Route path='/additem' element={<AddItem />}></Route>
        <Route path='/myitems' element={<MyItems />}></Route>
        <Route path='/blog' element={<Blog />}> </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
