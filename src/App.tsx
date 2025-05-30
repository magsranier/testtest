import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Gcash from "./Gcash";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/gcash" element={<Gcash />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
