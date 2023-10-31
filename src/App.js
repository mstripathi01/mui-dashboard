import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}>
            Home
          </Route>
          <Route path="/products" element={<Products />}>
            Products
          </Route>
          <Route path="/analytics" element={<Analytics />}>
            Analytics
          </Route>
          <Route path="/settings" element={<Settings />}>
            Settings
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
