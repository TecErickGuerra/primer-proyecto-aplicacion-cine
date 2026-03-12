import { useState } from "react"
import Header from "./components/Header"

// Importar las vistas
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"

function App() {
  // Estado para controlar la vista actual
  const [vistaActual, setVistaActual] = useState("home")

  // Estado para guardar la película seleccionada
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  // Función que cambia la vista actual
  const cambiarVista = (vista) => {
    setVistaActual(vista)
  }

  // Función para ir al detalle con los datos de la película seleccionada
  const verDetalle = (pelicula) => {
    console.log("✅ Película seleccionada:", pelicula)
    setVistaAnterior(vistaActual) // Guarda desde dónde vino
    setPeliculaSeleccionada(pelicula)
    setVistaActual("detalle")
  }

  const [favoritos, setFavoritos] = useState([])

  const [vistaAnterior, setVistaAnterior] = useState("home")

  // Función para agregar o quitar una película de favoritos
  function toggleFavorito(pelicula) {
    setFavoritos(prev =>
      prev.some(p => p.id === pelicula.id)
        ? prev.filter(p => p.id !== pelicula.id) // si ya está, la quitamos
        : [...prev, pelicula]                    // si no está, la agregamos
    )
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header maneja navegación */}
      <Header cambiarVista={cambiarVista} />

      {/* Renderizado condicional según la vista actual */}
      {vistaActual === "home" && (
        <Home cambiarVista={cambiarVista} verDetalle={verDetalle} toggleFavorito={toggleFavorito} favoritos={favoritos} />
      )}

      {vistaActual === "cartelera" && (
        <Cartelera cambiarVista={cambiarVista} verDetalle={verDetalle} toggleFavorito={toggleFavorito} favoritos={favoritos} />
      )}

      {vistaActual === "detalle" && (
        <Detalle pelicula={peliculaSeleccionada} cambiarVista={cambiarVista} vistaAnterior={vistaAnterior}   />
      )}

      {vistaActual === "alimentos" && (
        <Alimentos cambiarVista={cambiarVista} />
      )}

      {vistaActual === "otros" && (
        <Otros cambiarVista={cambiarVista} />
      )}
    </div>
  )
}

export default App