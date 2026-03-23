import { useState } from "react"
import Header from "./components/Header"
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/Footer"
import "./styles/App.css"

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

      <AppRoutes favoritos={favoritos} toggleFavorito={toggleFavorito} />

      <Footer />

    </div>
  )
}

export default App