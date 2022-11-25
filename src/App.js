import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component/navbar/Navbar";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Journey } from "./pages/Journey/Journey";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
