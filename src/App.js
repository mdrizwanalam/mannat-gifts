import logo from "./logo.svg";
import "./App.css";
import Header from "./components/common/header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="home_page_wrapper">
      <h3 className="text-center">MANNAT GIFT HOUSE</h3>
      <Header />
      <Home />
    </div>
  );
}

export default App;
