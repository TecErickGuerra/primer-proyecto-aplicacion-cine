import { Swiper, SwiperSlide } from "swiper/react"
// Módulo de navegación para habilitar flechas en el carrusel
import {Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import MovieCard from "./MovieCard"

function MovieCarousel({ movies, toggleFavorito, favoritos }) {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={10}
        >
            {movies.map(movie => (
                <SwiperSlide key={movie.id}>
                    <MovieCard
                        id={movie.id}
                        title={movie.titulo}
                        image={movie.imagen}
                        descripcion={movie.descripcion}
                        onFavorito={() => toggleFavorito(movie)}
                        esFavorito={favoritos.some(f => f.id === movie.id)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MovieCarousel