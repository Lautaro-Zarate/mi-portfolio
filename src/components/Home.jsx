
const Home = () => {
        const phoneNumber = "543875898903"; //NUMERO DE TELEFONO COMPLETO
        const message = "¡Hola Lautaro! he visto tu portfolio y me interesaría..."; //MENSAJE QUE SE ENVIA 
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; // LINK DE WHATSAPP
    return(
        <div>
            <section id="home" className="home-container">
                <div className="home-text">
                    <h1>¡Hola👋! Soy <span className="name">Lautaro</span></h1>
                    <p className="career"><b>Front-End Developer</b></p>
                    <p>¡Te invito a conocerme y que charlemos!</p>
                    <div className="home-buttons">
                        <button className="btn-primary" onClick={() => window.open(whatsappLink, "_blank")}>Contáctame</button>
                        <a href="/lautaro-zarate-CV.pdf" download={true} className="btn-secondary"> Descargar CV
                        {/* <button className="btn-secondary">Descargar CV</button> */}
                        </a>
                    </div>
                </div>
                <div className="image-container">
                    <img src="/Yo.jpeg" alt="Foto de mi apariencia" className="me-image"/>
                </div>
            </section>
        </div>
    )
}
export default Home;