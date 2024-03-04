import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopCategory } from "./pages/ShopCategory";
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { LoginSingup } from "./pages/LoginSingup";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category={'men'}/>} />
        <Route path="/women" element={<ShopCategory category={'women'}/>} />
        <Route path="/kid" element={<ShopCategory category={'kid'}/>} />
        <Route path="/product">
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSingup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
