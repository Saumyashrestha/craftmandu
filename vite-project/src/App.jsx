import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/home";
import NoPage from "./pages/noPage/noPage";

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/*" element = {<NoPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;