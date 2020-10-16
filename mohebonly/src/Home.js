import React from 'react';
import Header from './Header';
import Body from './Body';
import Carousel from './Carousel';
import Footer from './Footer';
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
