import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ChildCounter from "./components/childCounter";
import ParentCounter from "./components/parentCounter";
import Home from "./components/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeCOunter from "./components/homeCOunter";

function App() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch({
      type: "PRODUCT_SEARCH",
      payload: e.target.value,
    });
  };
  return (
    <div className="App">
      <input onChange={handleChange} />
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/counter">Counter</Link>{" "}
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/counter" element={<HomeCOunter />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
