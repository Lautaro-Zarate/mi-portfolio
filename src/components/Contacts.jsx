const Contacts = ()=> {
    const phoneNumber = "543875898903"; 
    const message = "¡Hola Lautaro! he visto tu portfolio y me interesaría..."; 
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const linkGitHub = "https://github.com/Lautaro-Zarate";
    const linkLinkedin = "https://www.linkedin.com/in/lautaro-zaraterivas/";

    const email = "lautaro.zrt7@gmail.com"; 
    const mailtoLink = `mailto:${email}`;

    
    return(
        <div id="contact" className="contact-container-primary">
            <h2>Contacto</h2>
            <p>Aquí dejo todos mis contactos, <span>¡Será un placer hablar contigo!</span></p>
            <div className="contact-container">
                <img src="/public/linkedin.png" alt="Linkedin" className="contact__icon"/>
                <button className="btn-primary" onClick={() => window.open(linkLinkedin, "_blank")}>Contactar</button>
            </div>
            <div className="contact-container">
                <img src="/public/whatsapp.png" alt="Whatsapp" className="contact__icon"/>
                <button className="btn-primary" onClick={() => window.open(whatsappLink, "_blank")}>Contactar</button>
            </div>
            <div className="contact-container">
                <img src="/public/gmail.png" alt="Gmail" className="contact__icon" />
                <button className="btn-primary" onClick={() => window.location.href = mailtoLink}>Contactar</button>
            </div>
            <div className="contact-container">
                <img src="/public/github.png" alt="Github" className="contact__icon"/>
                <button className="btn-primary" onClick={() => window.open(linkGitHub, "_blank")}>Git Hub</button>
            </div>
        </div>
    )
}
export default Contacts;