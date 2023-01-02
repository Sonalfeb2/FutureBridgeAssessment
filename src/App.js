import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Movie from './component/Movie';
function App() {
  return (
    <BrowserRouter>
     <h1>FutureBridge</h1>

      <Routes>
          <Route path="/" element={<Movie />} exact/>
          <Route path="*" element={<h1>Page Not Found </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
