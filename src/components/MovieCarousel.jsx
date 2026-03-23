import { Swiper, SwiperSlide } from "swiper/react"
// Módulo de navegación para habilitar flechas en el carrusel
import {Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import MovieCard from "./MovieCard"

function MovieCarousel({ movies }) {
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
                        title={movie.título}
                        image={movie.imagen}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MovieCarousel