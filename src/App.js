import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";

function App() {
  return (
    <>
      <header>
        <div className="bg-indigo-100  py-8 flex">
          <div className="mx-16 font-bold text-xl text-gray-600 cursor-pointer">
          <Link to="/">
            first component
          </Link>
          </div>
          <div className="mx-2 text-xl font-bold text-gray-600 cursor-pointer">
            <Link to="/second">
            second component
            </Link>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
