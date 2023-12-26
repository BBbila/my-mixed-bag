import { observer, inject } from "mobx-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UseRefCon from "./ReatHooks/useRef";
import Throttle from "./ReatHooks/throttleJitter";
import Test from "./page/test";
import GoBang from "./issue/gobang";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoBang></GoBang>} />
        <Route path="/page/test" element={<Test></Test>} />
        <Route path="/ReatHooks/throttleJitter" element={<Throttle></Throttle>} />
        <Route path="/ReatHooks/useRef" element={<UseRefCon></UseRefCon>} />
      </Routes>
    </BrowserRouter>
  );
}

export default inject((store) => store)(observer(App));




