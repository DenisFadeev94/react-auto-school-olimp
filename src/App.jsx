import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'reset-css';
import './Main.scss';

import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';
import Main from './componets/Main';

// import { headerNav, ready, reviews, documents } from '../../data';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
