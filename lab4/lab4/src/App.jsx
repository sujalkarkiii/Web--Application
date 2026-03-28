import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bulb from "./pages/Bulb";
import Password from "./pages/Password";
import ItemList from "./pages/ItemList";
import Counter from "./pages/Counter";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>

        <Route path="/"     element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/contact"     element={<Contact />} />


        <Route path="/bulb"     element={<Bulb />} />
        <Route path="/password" element={<Password />} />
        <Route path="/list"     element={<ItemList />} />
        <Route path="/counter"  element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;