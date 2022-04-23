import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Temple/Layout";

function App() {
  return (
    <div className="bg-bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Components={Home} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
