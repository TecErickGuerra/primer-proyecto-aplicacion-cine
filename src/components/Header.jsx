import { NavLink } from "react-router-dom"
import "../styles/Header.css"

function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <h1 className="site-title">CinePrueba</h1>

                <nav className="site-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Inicio
                    </NavLink>
                    <NavLink to="/cartelera" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Cartelera
                    </NavLink>
                    <NavLink to="/alimentos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Alimentos
                    </NavLink>
                    <NavLink to="/otros" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Otros
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header