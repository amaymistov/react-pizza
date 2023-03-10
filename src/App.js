import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFoundBlock from "./components/NotFound";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
