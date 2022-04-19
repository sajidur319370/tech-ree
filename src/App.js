import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Orders from "./components/Orders/Orders";
import Phone from "./components/Products/Phone/Phone";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import Products from "./components/Products/Products/Products";
import Tv from "./components/Products/Tv/Tv";
import Watch from "./components/Products/Watch/Watch";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import NotFound from "./components/Shared/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/home" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/watch" element={<Watch></Watch>}></Route>
        <Route path="/phone" element={<Phone></Phone>}></Route>
        <Route path="/tv" element={<Tv></Tv>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route
          path="/products/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
