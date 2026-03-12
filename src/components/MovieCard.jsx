import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

function MovieCard({ id, title, image, onFavorito, esFavorito, descripcion }) {

  const navigate = useNavigate()

  const [mostrarDescripcion, setMostrarDescripcion] = useState(false)

  const verDetalle = () => {
    navigate(`/pelicula/${id}`)
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover"
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          padding: "12px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>{title}</h3>

        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Botón detalle */}
          <Button
            text="Ver detalle"
            onClick={verDetalle}
          />

          {/* Botón favoritos */}
          <Button
            text={esFavorito ? "💔 Quitar favorito" : "❤️ Agregar favorito"}
            onClick={onFavorito}
          />
        </div>

        <Button
          text={mostrarDescripcion ? "Ocultar descripción" : "Mostrar descripción"}
          onClick={() => setMostrarDescripcion(!mostrarDescripcion)}
        />

        {mostrarDescripcion && (
          <p
            style={{
              marginTop: "8px",
              fontSize: "14px",
              maxWidth: "90%",
              textAlign: "center",
              color: "#333"
            }}
          >
            {descripcion || "No hay descripción disponible."}
          </p>
        )}
      </div>
    </div>
  )
}

export default MovieCard