import React from 'react';
import './style.css';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <Content/>
      <Footer/>
    </div>
  );
}
