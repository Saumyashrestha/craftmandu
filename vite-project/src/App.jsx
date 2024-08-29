import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/home";
import NoPage from "./pages/noPage/noPage";
import ProductInfo from "./pages/productInfo/productInfo";
import ScrollTop from "./components/scrollTop/scrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProducts from "./pages/allProducts/allProducts";
import LogIn from "./pages/registration/logIn";
import SignUp from "./pages/registration/signup";
import UserDashboard from "./pages/user/UserDashboard";

const App = () => {
  return(
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/*" element = {<NoPage/>}/>
          <Route path="/productinfo" element = {<ProductInfo/>}/>
          <Route path="/cart" element = {<CartPage/>}/>
          <Route path="/allproducts" element = {<AllProducts/>}/>
          <Route path="/user-dashboard" element = {<UserDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;