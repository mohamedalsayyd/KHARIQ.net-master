import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Body/Home";
import Tool from "./components/Body/Tool";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Navbar />
        <Home />
        <Footer />
      </Layout>
    ),
    errorElement: <>404</>,
  },
  {
    path: "/tool/:toolId",
    element: (
      <Layout>
        <Navbar />
        <Tool />
        <Footer />
      </Layout>
    ),
    errorElement: <>404</>,
  },
  {
    path: "*",
    element: <>404</>,
  },
]);

export { router };
