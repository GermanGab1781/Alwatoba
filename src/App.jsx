import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar/>
        <AnimatedRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
