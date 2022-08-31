import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/Navbar/Navbar";
import HomeRoutes from "./routes/HomeRoutes/HomeRoutes";
import Notfound from "./components/NotFound/NotFound";
import ReviewRoutes from "./routes/ReviewRoutes/ReviewRoutes";
import DashboardRoutes from "./routes/DashboardRoutes/DashboardRoutes";
import BlogRoutes from "./routes/BlogRoutes/BlogRoutes";
import AboutRoutes from "./routes/AboutRoutes/AboutRoutes";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navbar />}>
        <Route index element={<HomeRoutes />} />
        <Route path={"reviews"} element={<ReviewRoutes />} />
        <Route path={"dashboard"} element={<DashboardRoutes />} />
        <Route path={"blog"} element={<BlogRoutes />} />
        <Route path={"about"} element={<AboutRoutes />} />
      </Route>
      <Route path={"*"} element={<Notfound />} />
    </Routes>
  );
};

export default App;
