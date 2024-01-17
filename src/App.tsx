import { Suspense, lazy } from "react";
import "./App.css";

const Landingpage = lazy(() => import("./pages/Landingpage"));

function App() {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Landingpage />
      </Suspense>
    </div>
  );
}

export default App;
