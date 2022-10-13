import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../../pages/Home';
import Bookings from '../../pages/Bookings'
import Contact from '../../pages/Contact'
import About from '../../pages/About'
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='book' element={<Bookings /> }/>
          <Route path='contact' element={ <Contact /> }/>
          <Route path='about' element={ <About /> }/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
