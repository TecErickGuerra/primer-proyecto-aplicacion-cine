function FoodCard({ nombre, precio, imagen, categoria }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                backgroundColor: "white",
                transition: "transform 0.2s",
                cursor: "pointer"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
            <img
                src={imagen}
                alt={nombre}
                style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover"
                }}
            />
            
            <div style={{ padding: "12px" }}>
                <div style={{
                    fontSize: "0.8rem",
                    color: "#666",
                    textTransform: "uppercase",
                    marginBottom: "4px"
                }}>
                    {categoria}
                </div>
                
                <h3 style={{ margin: "0 0 8px 0", fontSize: "1.1rem" }}>
                    {nombre}
                </h3>
                
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "8px"
                }}>
                    <span style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#2ecc71"
                    }}>
                        ${precio.toFixed(2)}
                    </span>
                    
                    <button
                        style={{
                            backgroundColor: "#3498db",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                        onClick={() => alert(`Añadiste ${nombre} al carrito`)}
                    >
                        Añadir
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard