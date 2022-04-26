import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Temple/Layout";
import DetailMovie from "./Pages/DetailMovie/DetailMovie";

function App() {
  return (
    <div className="bg-bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Components={Home} />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/details/:id"
            element={<Layout Components={DetailMovie} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
