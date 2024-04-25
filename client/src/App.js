import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import ProductCategory from './Pages/ProductCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import newRelease from './Components/Assets/banner_release.jpg';
import bestSeller from './Components/Assets/banner_best.jpg';
import classicTitle from './Components/Assets/banner_classic.jpg';

// const sakura = process.env.React_APP_DOMAIN;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newReleases" element={<ProductCategory banner={newRelease} category="newRelease" />} />
          <Route path="/bestSellers" element={<ProductCategory banner={bestSeller} category="bestSeller" />} />
          <Route path="/classicTitles" element={<ProductCategory banner={classicTitle} category="classicTitle" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
