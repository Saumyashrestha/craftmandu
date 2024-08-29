import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/home";
import NoPage from "./pages/noPage/noPage";
import ProductInfo from "./pages/productInfo/productInfo";
import ScrollTop from "./components/scrollTop/scrollTop";

const App = () => {
  return(
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/*" element = {<NoPage/>}/>
          <Route path="/productinfo" element = {<ProductInfo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;