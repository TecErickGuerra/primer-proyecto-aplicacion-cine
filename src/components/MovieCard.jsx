// importamos el botón reutilizable
import React, { useState } from "react"
import Button from "./Button"

function MovieCard({ title, image, onVerDetalle, onFavorito, esFavorito, descripcion }) {
  // Estado para mostrar/ocultar descripción
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false)

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      {/* Imagén de la película */}
      <img
        src={image}  
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover" // Mantiene proporción sin deofrmarse
        }} 
      />

      {/* Contenido de la tarjeta */}
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
          {/* Botón 1: Ver detalle */}
          <Button text="Ver detalle" onClick={onVerDetalle} />

          {/* Botón 2: Favoritos */}
          <Button
            text={esFavorito ? "💔 Quitar favorito" : "❤️ Agregar favorito"}
            onClick={onFavorito}
          />
        </div>

        {/* Botón 3: Ocultar/Mostrar detalle */}
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