import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound';
import Services from './pages/Services'
import Homepage from './pages/Homepage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
