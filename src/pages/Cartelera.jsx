import MovieCard from "../components/MovieCard"
import peliculas from "../data/detalles.json" // Importa el JSON con todas las películas

function Cartelera({ toggleFavorito, favoritos }) {
  // Si quisieras filtrar solo ciertas películas para la cartelera, podrías hacerlo así:
  // const peliculasCartelera = peliculas.filter(p => p.enCartelera === true)
  // Por ahora mostramos todas las del JSON:
  const peliculasCartelera = peliculas.filter(p => p.categoria === "cartelera")

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      {peliculasCartelera.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          id={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.imagen}
          descripcion={pelicula.descripcion}
          onFavorito={() => toggleFavorito(pelicula)}
          esFavorito={favoritos.some(p => p.id === pelicula.id)}
        />
      ))}
    </main>
  )
}

export default Cartelera