import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchResults from "./pages/SearchResults";

const Landingpage = lazy(() => import("./pages/Landingpage"));
const ImageDetail = lazy(() => import("./pages/ImageDetail"));

function App() {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/image/:imageId" element={<ImageDetail />} />
          </Routes>

          <SearchResults />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
