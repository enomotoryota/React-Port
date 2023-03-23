import Home from "./components/Home";
import About2 from "./components/About2";
import Skills2 from "./components/Skills2";
import Works2 from "./components/Works2";
import ScrollTop from "./components/ScrollTop";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/home`} element={<Home />} />
          <Route path={`/About2/`} element={<About2 />} />
          <Route path={`/Skills2/`} element={<Skills2 />} />
          <Route path={`/Works2/`} element={<Works2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
