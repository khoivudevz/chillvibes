import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Temple/Layout";
import DetailMovie from "./Pages/DetailMovie/DetailMovie";
import DetailTVShows from "./Pages/DetailMovie/DetailTVShows";
import SeeAllNowPlaying from "./Pages/SeeAllNowPlaying/SeeAllNowPlaying";
import SeeAllUpComing from "./Pages/SeeAllUpComing/SeeAllUpComing";
import SeeAllPopular from "./Pages/SeeAllPopular/SeeAllPopular";
import SeeAllTopRated from "./Pages/SeeAllTopRated/SeeAllTopRated";
import SeeAllTVShows from "./Pages/SeeAllTVShows/SeeAllTVShows";

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
          <Route
            path="/detailstvshow/:id"
            element={<Layout Components={DetailTVShows} />}
          />
          <Route
            path="/upcoming"
            element={<Layout Components={SeeAllUpComing} />}
          />
          <Route
            path="/nowplaying"
            element={<Layout Components={SeeAllNowPlaying} />}
          />
          <Route
            path="/popular"
            element={<Layout Components={SeeAllPopular} />}
          />
          <Route
            path="/toprated"
            element={<Layout Components={SeeAllTopRated} />}
          />
          <Route
            path="/tvshows"
            element={<Layout Components={SeeAllTVShows} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
