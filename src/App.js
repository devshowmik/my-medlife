import { RouterProvider } from 'react-router-dom';
import React, { useContext } from 'react';
import './App.css';
import { router } from './Router/Router';
import { DarkContext } from './Context/DarkMode/DarkMode';

function App() {
  const { darkMode } = useContext(DarkContext);
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
