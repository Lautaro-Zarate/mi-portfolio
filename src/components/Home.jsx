import { motion } from "framer-motion";

const Home = () => {
        const phoneNumber = "543875898903"; //NUMERO DE TELEFONO COMPLETO
        const message = "¡Hola Lautaro! he visto tu portfolio y me interesaría..."; //MENSAJE QUE SE ENVIA 
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; // LINK DE WHATSAPP
    return(
        <div>
            <section id="home" className="home-container">
                <motion.div 
                className="home-text"
                initial={{ opacity: 0, y: 50 }} // Estado inicial: invisible y desplazado hacia abajo
                animate={{ opacity: 1, y: 0 }}  // Estado final: visible y en posición normal
                transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de easing
                >
                    <h1>¡Hola👋🏼! Soy <span className="name">Lautaro</span></h1>
                    <p className="career"><b>Front-End Developer</b></p>
                    <p>¡Te invito a conocerme y que charlemos!</p>
                    <div className="home-buttons">
                        <button className="btn-primary" onClick={() => window.open(whatsappLink, "_blank")}>Contáctame</button>
                        <a href="/cv-lautaro-rivas.pdf" download={true} className="btn-secondary"> Descargar CV
                        </a>
                    </div>
                </motion.div>
                <motion.div 
                className="image-container"
                initial={{ opacity: 0, y: 50 }} // Estado inicial: invisible y desplazado hacia abajo
                animate={{ opacity: 1, y: 0 }}  // Estado final: visible y en posición normal
                transition={{ duration: 2, ease: "easeOut" }} // Duración y tipo de easing
                >
                    <img src="/Yo.jpeg" alt="Foto de mi apariencia" className="me-image"/>
                </motion.div>
            </section>
        </div>
    )
}
export default Home;