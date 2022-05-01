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
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Spinner from './components/Shared/Spinner/Spinner';
import RequireAuth from './components/Pages/RequireAuth/RequireAuth';
import SingleInventory from './components/Pages/SingleInventory/SingleInventory';

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <Spinner />

  return (
    <div className='bg-slate-100'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:itemId' element={
          <RequireAuth>
            <SingleInventory />
          </RequireAuth>
        }></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        }>
        </Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }>
        </Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }>
        </Route>
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
