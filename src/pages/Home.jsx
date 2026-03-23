import MovieCard from "../components/MovieCard"
import PelículasSugeridas from "../components/PelículasSugeridas"  // Nuevo
import peliculas from "../detalles.json" // Importamos los datos locales de películas
import MovieCarousel from "../components/MovieCarousel";

function Home({ toggleFavorito, favoritos }) {
    const peliculasHome = peliculas.filter(p => p.categoria === "home")
    
  return (
    <>
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px"
        }}
      >
        <h2>ESTRENOS</h2>
        <MovieCarousel movies={peliculas}/>
      </section>

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
        {peliculasHome.map((pelicula) => (
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
      
      {/* Sección de películas sugeridas */}
      <PelículasSugeridas
        toggleFavorito={toggleFavorito}
        favoritos={favoritos}
      />
    </>
  )
}

export default Home