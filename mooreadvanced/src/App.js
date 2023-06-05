import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import ContactUs from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
