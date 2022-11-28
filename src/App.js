import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component/navbar/Navbar";
import { SingleProduct } from "./component/SingleProduct/SingleProduct";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Journey } from "./pages/Journey/Journey";
import { Store } from "./pages/Store/Store";
import { Team } from "./pages/Team/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/team" element={<Team />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store/:productId" element={<SingleProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
