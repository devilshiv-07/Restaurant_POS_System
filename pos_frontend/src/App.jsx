import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu, NotFound } from "./pages";
import Header from './components/shared/Header';

const App = () => {
  return (
    <>
    <Router >
      <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/tables' element={<Tables />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App