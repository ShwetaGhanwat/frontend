import React from 'react';
import './App.css';
import LandPage from './landfile/LandPage';
import Post from './postfile/Post';
import ViewImg from './viewPage/ViewImg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandPage />} />
          <Route path='/posting' element={<Post/>} /> 
          <Route path='/view' element={<ViewImg/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

