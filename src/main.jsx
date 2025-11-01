import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import RecipePage from "./components/RecipePage";
import { ROUTE_ABOUT, ROUTE_HOME, ROUTE_RECIPES } from "./constants";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path={ROUTE_HOME} element={<Homepage />} />
      <Route path={ROUTE_ABOUT} element={<AboutPage />} />
      <Route path={ROUTE_RECIPES} element={<RecipePage />} />
    </Routes>
  </BrowserRouter>
);
