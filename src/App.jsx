import { Suspense, useEffect } from "react";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { getCampers } from "./redux/campers/operations";

const HomePage = lazy(() => import("./pages/Home"));
const CatalogPage = lazy(() => import("./pages/Catalog"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  });

  return (
    <Layout>
      <Suspense fallback={null}>
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
