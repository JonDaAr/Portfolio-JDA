import React from 'react';
import Navbar from './Navbar';
import StarField from './StarField.js';
import '../dist/style/style.css'

const App = () => {
  return (
    <div calss="container">
      <StarField />
      <Navbar />
      
    </div>
  );
};


export default App;