import React from 'react';
import Header from './partials/Header';
import Body from './Body';
import Carousel from './partials/Carousel';
import Footer from './partials/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      
        <Header/>
        <Body />
        <Carousel />
        <Footer />
      
    </div>
  );
}

export default App;
