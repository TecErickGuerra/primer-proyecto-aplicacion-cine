import "../styles/Footer.css"

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">
                {/* Columna izquierda */}
                <div className="footer-left">
                    <h3>Atención telefónica</h3>
                    <p className="telefono">55 5257-6969</p>

                    <div className="footer-social">
                        <img src="/facebook.png" alt="facebook"/>
                        <img src="/twitter.png" alt="twitter"/>
                        <img src="/instagram.png" alt="instagram"/>
                        <img src="/youtube.png" alt="youtube"/>
                    </div>
                </div>

                {/* Columna centro */}
                <div className="footer-center">
                    <p>Sobre CinePrueba</p>
                    <p>Facturación Electrónica</p>
                    <p>Ventas Corporativas</p>
                    <p>Términos y Condiciones Productos Cinemex</p>
                    <p>Política de precios</p>
                    <p>Política de reembolsos</p>
                    <p>Atracción de Talento</p>
                    <p>Términos y condiciones</p>
                    <p>Aviso de Privacidad</p>
                </div>

                {/* Columna derecha */}
                <div className="footer-right">

                    <div className="apps">
                        <img src="/appstore.png" alt="App Store"/>
                        <img src="/googleplay.png" alt="Google Play"/>
                    </div>

                    <div className="partners">
                        <img src="/paypal.png" alt="paypal"/>
                    </div>

                </div>

            </div>

            <p className="footer-copy">
                Derechos reservados © CinePrueba 2026
            </p>

        </footer>
    )
}

export default Footer