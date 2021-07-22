import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {


  return (
    <div className="App">
        
        <Router>
          <Nav/>
          <Content/>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
