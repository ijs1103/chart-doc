import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homes/Home";
import Header from "./components/headers/Header";
import Examples from "./pages/examples/Examples";
import Chart from "./pages/charts/Chart";
import Docs from "./pages/docs/Docs";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/examples/:chartName" element={<Chart />} />
        <Route path="/docs/:docsName" element={<Docs />} />
       </Routes>
    </BrowserRouter>
  );
}
