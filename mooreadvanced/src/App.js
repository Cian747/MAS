import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services'
import Homepage from './pages/Homepage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
