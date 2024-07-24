import { Suspense } from "react";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/Home"));
const CatalogPage = lazy(() => import("./pages/Catalog"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
