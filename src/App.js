import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import Navbar1 from "./components/Navbar/Navbar1";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Navbar1 /> */}
      <div className="content-container">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
