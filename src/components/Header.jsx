import { NavLink } from "react-router-dom"

function Header() {
    const linkStyle = {
        textDecoration: "none",
        cursor: "pointer",
        fontWeight: "500"
    }

    const activeStyle = {
        fontWeight: "bold",
        borderBottom: "2px solid black"
    }

    return (
        <header
            style={{
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#c9f5ea"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 24px",
                    maxWidth: "1400px",
                    margin: "0 auto"
                }}
            >
                <h1 style={{ margin: 0 }}>CinePrueba</h1>

                <nav
                    style={{
                        display: "flex",
                        gap: "24px"
                    }}
                >
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
                        }
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        to="/cartelera"
                        style={({ isActive }) =>
                            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
                        }
                    >
                        Cartelera
                    </NavLink>

                    <NavLink
                        to="/alimentos"
                        style={({ isActive }) =>
                            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
                        }
                    >
                        Alimentos
                    </NavLink>

                    <NavLink
                        to="/otros"
                        style={({ isActive }) =>
                            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
                        }
                    >
                        Otros
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header