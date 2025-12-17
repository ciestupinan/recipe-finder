import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage/AboutPage";
import RecipePage from "./components/RecipePage";
import { ROUTE_ABOUT, ROUTE_HOME, ROUTE_RECIPES } from "./constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <QueryClientProvider client={queryClient}>
        <Route path={ROUTE_HOME} element={<Homepage />} />
        <Route path={ROUTE_ABOUT} element={<AboutPage />} />
        <Route path={ROUTE_RECIPES} element={<RecipePage />} />
      </QueryClientProvider>
    </Routes>
  </BrowserRouter>
);
