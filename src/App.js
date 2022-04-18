import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Phone from "./components/Products/Phone/Phone";
import Products from "./components/Products/Products/Products";
import Tv from "./components/Products/Tv/Tv";
import Watch from "./components/Products/Watch/Watch";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/watch" element={<Watch></Watch>}></Route>
        <Route path="/phone" element={<Phone></Phone>}></Route>
        <Route path="/tv" element={<Tv></Tv>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
