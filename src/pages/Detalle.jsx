import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import peliculas from "../data/detalles.json"
import sugeridas from "../data/sugeridas.json"

function Detalle() {
  const { id } = useParams()
  const navigate = useNavigate()

  const todasLasPeliculas = [...peliculas, ...sugeridas]

  const pelicula = todasLasPeliculas.find(p => p.id === Number(id))

  if (!pelicula) {
    return (
      <main style={{ padding: "24px", textAlign: "center" }}>
        <h2>No se encontró la película</h2>
      </main>
    )
  }

  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [comentario, setComentario] = useState("")
  const [metodoPago, setMetodoPago] = useState("tarjeta")
  const [mensaje, setMensaje] = useState("")

  const manejarCompra = (e) => {
    e.preventDefault()

    const resumen = `
🎟️ Gracias, ${nombre}!
Has comprado ${cantidadBoletos} boleto(s) para "${pelicula.titulo}".
💬 Tu comentario: "${comentario}"
💳 Método de pago: ${metodoPago.toUpperCase()}
`

    setMensaje(resumen)

    setNombre("")
    setCantidadBoletos(1)
    setComentario("")
    setMetodoPago("tarjeta")
  }

  return (
    <main
      style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>{pelicula.titulo}</h2>

      <img
        src={pelicula.imagen}
        alt={pelicula.titulo}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      />

      <p>{pelicula.descripcion}</p>

      <hr style={{ margin: "24px 0" }} />

      <h3>🎟️ Comprar boletos y dejar comentario</h3>

      <form
        onSubmit={manejarCompra}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <input
          type="number"
          min="1"
          value={cantidadBoletos}
          onChange={(e) => setCantidadBoletos(e.target.value)}
          required
        />

        <textarea
          placeholder="Comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />

        <select
          value={metodoPago}
          onChange={(e) => setMetodoPago(e.target.value)}
        >
          <option value="tarjeta">Tarjeta de crédito</option>
          <option value="debito">Tarjeta de débito</option>
          <option value="efectivo">Efectivo</option>
        </select>

        <button type="submit">
          Confirmar compra
        </button>
      </form>

      {mensaje && (
        <div style={{ marginTop: "20px", whiteSpace: "pre-line" }}>
          {mensaje}
        </div>
      )}

      <button
        onClick={() => navigate(-1)}
        style={{ marginTop: "20px" }}
      >
        ← Volver
      </button>
    </main>
  )
}

export default Detalle