import { Route, Routes } from "react-router-dom";
import Home from "./pages/pagehome/PageHome";
import Artikel from "./pages/pageartikel/PageArtikel";
import DetailArtikel from "./pages/pageartikel/detail/DetailArtikel";
import Video from "./pages/pagevideo/PageVideo";
import DetailVideo from "./pages/pagevideo/detail/DetailVideo";
import Material from "./pages/pagematerial/PageMaterial";
import DetailMaterial from "./pages/pagematerial/detail/DetailMaterial";
import About from "./pages/pageabout/PageAbout";
import Masuk from "./pages/pagemasuk/PageMasuk";
import Daftar from "./pages/pagedaftar/PageDaftar";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artikel">
        <Route path="" element={<Artikel />} />
        <Route path="detail-artikel/:id" element={<DetailArtikel />} />
      </Route>
      <Route path="/video">
        <Route path="" element={<Video />} />
        <Route path="detail-video/:id" element={<DetailVideo />} />
      </Route>
      <Route path="/material">
        <Route path="" element={<Material />} />
        <Route path="detail-material/:id" element={<DetailMaterial />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/masuk" element={<Masuk />} />
      <Route path="/daftar" element={<Daftar />} />
    </Routes>
  );
};

export default AppRouters;
