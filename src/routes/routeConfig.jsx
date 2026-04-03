import Home from "../pages/Home";
import Gallery from "../components/gallery/Gallery";
import Specs from "../components/specs/Specs";
import NotFound from "../pages/NotFound";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/specs", element: <Specs /> },
  { path: "*", element: <NotFound /> },
];
