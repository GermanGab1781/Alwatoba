import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthContextProvider} from "./firebase";

function App() {
  return (
    <div className="overflow-x-hidden font-comfortaa">
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar/>
          <AnimatedRoutes/>
          <Footer/>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
