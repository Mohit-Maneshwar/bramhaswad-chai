import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes  className="w-full" />
      <Footer />
    </Router>
  );
}

export default App;
