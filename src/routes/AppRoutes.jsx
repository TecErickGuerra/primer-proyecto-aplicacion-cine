import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const Cartelera = lazy(() => import("../pages/Cartelera"));
const Detalle = lazy(() => import("../pages/Detalle"));
const Alimentos = lazy(() => import("../pages/Alimentos"));
const Otros = lazy(() => import("../pages/Otros"));

function AppRoutes({ favoritos, toggleFavorito }) {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favoritos={favoritos}
              toggleFavorito={toggleFavorito}
            />
          }
        />
        <Route
          path="/cartelera"
          element={
            <Cartelera
              favoritos={favoritos}
              toggleFavorito={toggleFavorito}
            />
          }
        />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/pelicula/:id" element={<Detalle />} />
        {/* Ruta 404 */}
        <Route path="*" element={<h2 style={{ textAlign: "center" }}>Página no encontrada</h2>} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;