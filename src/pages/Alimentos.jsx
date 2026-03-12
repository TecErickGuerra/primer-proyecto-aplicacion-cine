import FoodCard from "../components/FoodCard"

function Alimentos({ cambiarVista }) {
    // Categorías de alimentos
    const categorias = [
        {
            nombre: "Bebidas",
            items: [
                { 
                    id: 1,
                    nombre: "Refresco", 
                    precio: 35.00,
                    imagen: "https://cuponassets.cuponatic-latam.com/backendMx/uploads/imagenes_descuentos/112461/4e2d1e18b4dc4b88f5f9ff52958f5797e39c31db.XL2.jpg"
                },
                { 
                    id: 2,
                    nombre: "Frappe de Oreo", 
                    precio: 35.00,
                    imagen: "https://pbs.twimg.com/media/AyQ0WMICEAATWvA.jpg"
                }
            ]
        },
        {
            nombre: "Comestibles",
            items: [
                { 
                    id: 3,
                    nombre: "Hamburguesa", 
                    precio: 89.00,
                    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop"
                },
                { 
                    id: 4,
                    nombre: "Hot Dog", 
                    precio: 59.00,
                    imagen: "https://img-global.cpcdn.com/recipes/18aa41b0550d6ad5/400x400cq80/photo.jpg"
                }
            ]
        },
        {
            nombre: "Snacks y Dulces",
            items: [
                { 
                    id: 5,
                    nombre: "Hershey's Cookies & Cream", 
                    precio: 45.00,
                    imagen: "https://lagranbodega.vteximg.com.br/arquivos/ids/282682-1000-1000/7501024523788.jpg?v=637534133091500000"
                },
                { 
                    id: 6,
                    nombre: "Palomitas de Mantequilla", 
                    precio: 65.00,
                    imagen: "https://static.promodescuentos.com/threads/raw/vhWka/935016_1/re/1024x1024/qt/60/935016_1.jpg"
                }
            ]
        }
    ]

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