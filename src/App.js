
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Components/Pages/Products/Products';
import Home from './Components/Pages/Home/Home';
import ContextCartProvider from './Components/Data/Context/Context';
import Product from './Components/Pages/Products/Product';
import NOTFound from './Components/Pages/NotFound/NOTFound';
import Control from './Components/Pages/Control/Control';
function App() {
  return (
    <div>
      <Router>
        <ContextCartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/control" element={<Control />} />
            <Route path='*' element={<NOTFound/>}/>
          </Routes>

        </ContextCartProvider>

      </Router>
    </div>
  );
}

export default App;
