import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home type="general" pageItem={9} />} />
        <Route path="/business" element={<Home type="business" pageItem={9} />} />
        <Route path="/entertainment" element={<Home type="entertainment" pageItem={9} />} />
        <Route path="/health" element={<Home type="health" pageItem={9} />} />
        <Route path="/science" element={<Home type="science" pageItem={9} />} />
        <Route path="/sports" element={<Home type="sports" pageItem={9} />} />
        <Route path="/technology" element={<Home type="technology" pageItem={9} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App