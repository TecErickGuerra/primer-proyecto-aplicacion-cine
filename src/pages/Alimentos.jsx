import FoodCard from "../components/FoodCard"
import categorias from "../data/alimentos.json"

function Alimentos() {
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ 
                textAlign: "center", 
                marginBottom: "40px",
                color: "#333" 
            }}>
                🍿 Dulcería
            </h1>

            {categorias.map((categoria, idx) => (
                <div key={idx} style={{ marginBottom: "40px" }}>
                    <h2 style={{ 
                        borderBottom: "2px solid #3498db",
                        paddingBottom: "10px",
                        marginBottom: "20px",
                        color: "#2c3e50"
                    }}>
                        {categoria.nombre}
                    </h2>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "20px"
                    }}>
                        {categoria.items.map(item => (
                            <FoodCard
                                key={item.id}
                                nombre={item.nombre}
                                precio={item.precio}
                                imagen={item.imagen}
                                categoria={categoria.nombre}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Alimentos