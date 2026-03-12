function Otros({ cambiarVista }) {
    // Datos de las diferentes secciones
    const secciones = {
        promociones: [
            {
                id: 1,
                titulo: "Martes de Descuento",
                descripcion: "2x1 en entradas todos los martes",
                imagen: "🎫",
                color: "#ff6b6b"
            },
            {
                id: 2,
                titulo: "Combo Familiar",
                descripcion: "4 entradas + 2 combos grandes",
                imagen: "🍿",
                color: "#4ecdc4"
            },
            {
                id: 3,
                titulo: "Cumpleaños Feliz",
                descripcion: "Entrada gratis en tu cumpleaños",
                imagen: "🎂",
                color: "#ffe66d"
            }
        ],
        membresias: [
            {
                id: 4,
                titulo: "Membresía Plata",
                precio: "$99/mes",
                beneficios: [
                    "10% en dulcería",
                    "1 entrada gratis al mes",
                    "Acceso a preventas"
                ],
                color: "#95a5a6"
            },
            {
                id: 5,
                titulo: "Membresía Oro",
                precio: "$199/mes",
                beneficios: [
                    "20% en dulcería",
                    "2 entradas gratis al mes",
                    "Acceso VIP a preventas",
                    "Descuento en cumpleaños"
                ],
                color: "#f1c40f"
            },
            {
                id: 6,
                titulo: "Membresía Platino",
                precio: "$299/mes",
                beneficios: [
                    "30% en dulcería",
                    "4 entradas gratis al mes",
                    "Acceso VIP a preventas",
                    "Descuento en cumpleaños",
                    "Invita a 1 amigo gratis"
                ],
                color: "#e74c3c"
            }
        ],
        preventas: [
            {
                id: 7,
                pelicula: "Avengers: Secret Wars",
                fecha: "Estreno: 17 Diciembre 2027",
                disponibilidad: "Preventa TBA",
                imagen: "🎬"
            },
            {
                id: 8,
                pelicula: "Super Mario Galaxy: La Película",
                fecha: "Estreno: 1 Abril 2026",
                disponibilidad: "Preventa desde Marzo 2026",
                imagen: "🦇"
            },
            {
                id: 9,
                pelicula: "Spider-Man: Beyond the Spider-Verse",
                fecha: "Estreno: TBA",
                disponibilidad: "Preventa TBA",
                imagen: "🕷️"
            }
        ],
        formatos: [
            {
                id: 10,
                nombre: "IMAX",
                descripcion: "La experiencia cinematográfica definitiva",
                caracteristicas: [
                    "Pantalla gigante",
                    "Sonido envolvente",
                    "Imágenes mejoradas"
                ],
                icono: "🎥",
                color: "#3498db"
            },
            {
                id: 11,
                nombre: "4DX",
                descripcion: "Siente la película en movimiento",
                caracteristicas: [
                    "Asientos móviles",
                    "Efectos especiales",
                    "Viento, agua y aromas"
                ],
                icono: "💺",
                color: "#9b59b6"
            },
            {
                id: 12,
                nombre: "ScreenX",
                descripcion: "Pantalla panorámica de 270°",
                caracteristicas: [
                    "3 pantallas simultáneas",
                    "Visión periférica",
                    "Inmersión total"
                ],
                icono: "📽️",
                color: "#e67e22"
            }
        ]
    }

    // Componente para tarjeta de promoción
    const PromocionCard = ({ promocion }) => (
        <div style={{
            backgroundColor: promocion.color,
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.3s",
            cursor: "pointer"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
                {promocion.imagen}
            </div>
            <h3 style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>
                {promocion.titulo}
            </h3>
            <p style={{ margin: "0", color: "#34495e" }}>
                {promocion.descripcion}
            </p>
        </div>
    )

    // Componente para tarjeta de membresía
    const MembresiaCard = ({ membresia }) => (
        <div style={{
            border: `2px solid ${membresia.color}`,
            borderRadius: "12px",
            padding: "20px",
            backgroundColor: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "transform 0.3s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
            <h3 style={{ color: membresia.color, marginTop: 0 }}>
                {membresia.titulo}
            </h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "10px 0" }}>
                {membresia.precio}
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
                {membresia.beneficios.map((beneficio, idx) => (
                    <li key={idx} style={{ marginBottom: "8px", color: "#555" }}>
                        ✓ {beneficio}
                    </li>
                ))}
            </ul>
            <button style={{
                width: "100%",
                padding: "10px",
                backgroundColor: membresia.color,
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "1rem",
                cursor: "pointer",
                fontWeight: "bold"
            }}
            onClick={() => alert(`¡Gracias por interesarte en ${membresia.titulo}!`)}
            >
                Suscribirme
            </button>
        </div>
    )

    // Componente para tarjeta de preventa
    const PreventaCard = ({ preventa }) => (
        <div style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            padding: "20px",
            borderLeft: "4px solid #e74c3c",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
        }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                {preventa.imagen}
            </div>
            <h3 style={{ margin: "0 0 5px 0" }}>{preventa.pelicula}</h3>
            <p style={{ color: "#e74c3c", fontWeight: "bold", margin: "5px 0" }}>
                {preventa.fecha}
            </p>
            <p style={{ color: "#7f8c8d", margin: "5px 0 15px 0" }}>
                {preventa.disponibilidad}
            </p>
            <button style={{
                backgroundColor: "#27ae60",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%"
            }}
            onClick={() => alert(`Preventa para ${preventa.pelicula} disponible`)}
            >
                Comprar Preventa
            </button>
        </div>
    )

    // Componente para tarjeta de formato
    const FormatoCard = ({ formato }) => (
        <div style={{
            background: `linear-gradient(135deg, ${formato.color}20, ${formato.color}40)`,
            borderRadius: "12px",
            padding: "20px",
            border: `1px solid ${formato.color}`,
            transition: "all 0.3s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 8px 16px ${formato.color}50`}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
        >
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
                {formato.icono}
            </div>
            <h3 style={{ color: formato.color, margin: "0 0 10px 0" }}>
                {formato.nombre}
            </h3>
            <p style={{ color: "#555", marginBottom: "15px" }}>
                {formato.descripcion}
            </p>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {formato.caracteristicas.map((caract, idx) => (
                    <li key={idx} style={{ color: "#666", marginBottom: "5px" }}>
                        • {caract}
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
            <h1 style={{ 
                textAlign: "center", 
                marginBottom: "40px",
                color: "#2c3e50",
                fontSize: "2.5rem"
            }}>
                🎬 Otros Servicios
            </h1>

            {/* Sección de Promociones */}
            <section style={{ marginBottom: "50px" }}>
                <h2 style={{
                    borderBottom: "3px solid #ff6b6b",
                    paddingBottom: "10px",
                    marginBottom: "25px",
                    color: "#2c3e50"
                }}>
                    🎁 Promociones Especiales
                </h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px"
                }}>
                    {secciones.promociones.map(promo => (
                        <PromocionCard key={promo.id} promocion={promo} />
                    ))}
                </div>
            </section>

            {/* Sección de Membresías */}
            <section style={{ marginBottom: "50px" }}>
                <h2 style={{
                    borderBottom: "3px solid #f1c40f",
                    paddingBottom: "10px",
                    marginBottom: "25px",
                    color: "#2c3e50"
                }}>
                    💳 Membresías
                </h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px"
                }}>
                    {secciones.membresias.map(mem => (
                        <MembresiaCard key={mem.id} membresia={mem} />
                    ))}
                </div>
            </section>

            {/* Sección de Preventas */}
            <section style={{ marginBottom: "50px" }}>
                <h2 style={{
                    borderBottom: "3px solid #e74c3c",
                    paddingBottom: "10px",
                    marginBottom: "25px",
                    color: "#2c3e50"
                }}>
                    🎟️ Preventas
                </h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px"
                }}>
                    {secciones.preventas.map(prev => (
                        <PreventaCard key={prev.id} preventa={prev} />
                    ))}
                </div>
            </section>

            {/* Sección de Formatos Especiales */}
            <section style={{ marginBottom: "50px" }}>
                <h2 style={{
                    borderBottom: "3px solid #3498db",
                    paddingBottom: "10px",
                    marginBottom: "25px",
                    color: "#2c3e50"
                }}>
                    📽️ Formatos Especiales
                </h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px"
                }}>
                    {secciones.formatos.map(formato => (
                        <FormatoCard key={formato.id} formato={formato} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Otros