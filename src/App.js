import React, { usState, useEffect } from 'react'
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
 } from 'react-router-dom'
import AddTestimonial from './pages/AddTestimonial/AddTestimonial';
import Homepage from './pages/Homepage/Homepage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/add-testimonial' element={<AddTestimonial/>} />
          <Route path='/' element={<Homepage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
