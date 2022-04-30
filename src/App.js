import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className='bg-slate-100'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
