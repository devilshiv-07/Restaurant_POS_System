import React from "react";
import {BrowserRouter as Router, Routes, Route,useLocation,} from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu, NotFound } from "./pages";
import Header from "./components/shared/Header";

const Layout = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
};

export default App;