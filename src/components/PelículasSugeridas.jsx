import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PelículasSugeridas({ toggleFavorito, favoritos }) {
  const navigate = useNavigate()
  const [peliculas, setPeliculas] = useState([]);
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado para carga

  useEffect(() => {
    Promise.all([
        fetch("/sugeridas.json").then((res) => res.json()),
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json()
        ),
    ])
        .then(([pelis, api]) => {
        console.log("🎬 Sugeridas cargadas:", pelis); // Nuevo log
        console.log("🌐 Datos API pública:", api);    // Log extra opcional
        setPeliculas(pelis);
        setApiData(api);
        })
        .catch((err) => console.error("Error al cargar datos:", err))
        .finally(() => setIsLoading(false));
    }, []);

  return (
    <section style={{ padding: "20px" }}>
      <h2>🎥 Películas sugeridas</h2>

      {/* --- Mostrar mensaje de carga --- */}
      {isLoading ? (
        <div style={{ textAlign: "center", margin: "40px 0" }}>
          <div
            style={{
              border: "6px solid #f3f3f3",
              borderTop: "6px solid #e50914",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              margin: "0 auto",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <p style={{ marginTop: "10px" }}>Cargando sugerencias...</p>

          {/* Animación simple CSS-in-JS */}
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      ) : (
        <>
          {/* Mostrar datos externos */}
          {apiData && (
            <p style={{ fontStyle: "italic" }}>
              (Datos externos cargados: <strong>{apiData.title}</strong>)
            </p>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            {peliculas.map((peli) => {
              const esFavorito = favoritos.some((f) => f.id === peli.id);
              return (
                <div
                  key={peli.id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    overflow: "hidden",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={peli.imagen}
                    alt={peli.titulo}
                    style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  />
                  <div style={{ padding: "10px" }}>
                    <h3 style={{ margin: "10px 0" }}>{peli.titulo}</h3>
                    <p>{peli.año} • {peli.genero}</p>

                    <button
                      onClick={() => navigate(`/pelicula/${peli.id}`)}
                      style={{ margin: "5px", padding: "5px 10px" }}
                    >
                      Ver Detalle
                    </button>

                    <button
                      onClick={() => toggleFavorito(peli)}
                      style={{
                        margin: "5px",
                        padding: "5px 10px",
                        backgroundColor: esFavorito ? "gold" : "#ddd",
                      }}
                    >
                      ⭐ Favorito
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}

export default PelículasSugeridas;