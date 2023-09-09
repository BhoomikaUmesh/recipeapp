import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Registration from './Components/Registration';
import Login from './Components/Login';
import CreateRecipe from './Components/CreateRecipe';
import SavedRecipe from './Components/SavedRecipe';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Registration />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/recipe/create-recipe" element={<CreateRecipe />} />
        <Route path="/recipe/saved-recipe" element={<SavedRecipe />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;


