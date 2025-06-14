import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'reset-css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Main from './componets/Main';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
