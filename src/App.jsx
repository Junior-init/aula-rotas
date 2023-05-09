import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contato from "./pages/Contato";
function App() {
  return (
    
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
