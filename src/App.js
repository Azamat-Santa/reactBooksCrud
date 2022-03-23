import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import 'antd/dist/antd.css'; 
import AddBook from './pages/AddBook/AddBook';
import EditBook from './pages/EditBook/EditBook';

function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/addUser" element={<AddBook />} />
          <Route  path="/editBook/:id" element={<EditBook />} />
        </Routes>
        
    </div>
  );
}

export default App;
