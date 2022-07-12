import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetail'
function App() {
  return (
    <Box with='400px'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />

      </Routes>
      <Footer />
    </Box>
  );
}
export default App;
