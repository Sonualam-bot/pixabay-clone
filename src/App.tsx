import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./pages/Loader";

const Landingpage = lazy(() => import("./pages/Landingpage"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
