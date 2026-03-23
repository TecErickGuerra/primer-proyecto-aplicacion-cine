import { useState } from "react"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"
import Footer from "./components/Footer"

function App() {

  const [favoritos, setFavoritos] = useState([])

  function toggleFavorito(pelicula) {
    setFavoritos(prev =>
      prev.some(p => p.id === pelicula.id)
        ? prev.filter(p => p.id !== pelicula.id)
        : [...prev, pelicula]
    )
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

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
        <Route path="*" element={<h2 style={{textAlign:"center"}}>Página no encontrada</h2>} />
      </Routes>
      
      <Footer />

    </div>
  )
}

export default App