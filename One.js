import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Menu from './Menu/Menu';
import List from './List/List';
import Slider from './Slider/Slider';
import Footer from './Footer/Footer';

export default function One() {
  return (
    <div>
      <Header/>
      <Main/>
      <Menu/>
      <List/>
      <Slider/>
      <Footer/>
    </div>
  )
}
