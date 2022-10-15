import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../../pages/Home';
import Bookings from '../../pages/Bookings'
import Contact from '../../pages/Contact'
import About from '../../pages/About'
import Footer from '../Footer/Footer';
import SubjectPage from '../../pages/SubjectPage';
import PageNotFound from '../../pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='book' element={<Bookings /> }/>
          <Route path='contact' element={ <Contact /> }/>
          <Route path='about' element={ <About /> }/>
          <Route path='subjects'>
            <Route path='Mathematics' element={<SubjectPage />} />
            <Route path='English' element={<SubjectPage />} />
            <Route path='History' element={<SubjectPage />} />
            <Route path='Religious-studies' element={<SubjectPage />} />
            <Route path='Psychology-sociology' element={<SubjectPage />} />
            <Route path='Other' element={<SubjectPage />} />
          </Route>
          <Route path='*' element={<PageNotFound />}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
