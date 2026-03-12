import { useState } from "react"

function Detalle({ pelicula, cambiarVista, vistaAnterior }) {
  // 🎬 Si no hay película seleccionada
  if (!pelicula) {
    return (
      <main style={{ padding: "24px", textAlign: "center" }}>
        <h2>No hay película seleccionada</h2>
      </main>
    )
  }

  // 🧠 Estados controlados del formulario
  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [comentario, setComentario] = useState("")
  const [metodoPago, setMetodoPago] = useState("tarjeta")
  const [mensaje, setMensaje] = useState("")

  // 📤 Manejador del envío del formulario
  const manejarCompra = (e) => {
    e.preventDefault()
    alert(`Pago procesado con ${metodoPago}!`)

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
        {/* Nombre del usuario */}
        <label>
          Nombre completo:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            placeholder="Ej. Juan Pérez"
          />
        </label>

        {/* Cantidad de boletos */}
        <label>
          Cantidad de boletos:
          <input
            type="number"
            min="1"
            value={cantidadBoletos}
            onChange={(e) => setCantidadBoletos(e.target.value)}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </label>

        {/* Comentario */}
        <label>
          Comentario:
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="¿Qué esperas de esta película?"
            rows="3"
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "4px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          ></textarea>
        </label>

        {/* Método de pago */}
        <label>
          Método de pago:
          <select
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "4px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="tarjeta">Tarjeta de crédito</option>
            <option value="debito">Tarjeta de débito</option>
            <option value="efectivo">Efectivo</option>
          </select>
        </label>

        <button
          type="submit"
          style={{
            padding: "10px 16px",
            backgroundColor: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Confirmar compra
        </button>
      </form>

      {/* Mensaje de confirmación */}
      {mensaje && (
        <div
          style={{
            marginTop: "20px",
            background: "#f0fff0",
            border: "1px solid #b2ffb2",
            padding: "12px",
            borderRadius: "6px",
            color: "green",
            whiteSpace: "pre-line",
          }}
        >
          {mensaje}
        </div>
      )}

      {/* Botón volver */}
      <button
        onClick={() => cambiarVista(vistaAnterior || "home")}
        style={{
          marginTop: "20px",
          backgroundColor: "#ccc",
          color: "#000",
          border: "none",
          borderRadius: "4px",
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        ← Volver
      </button>
    </main>
  )
}

export default Detalle