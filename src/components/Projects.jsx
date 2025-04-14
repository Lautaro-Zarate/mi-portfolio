const Projects = () => {
    const linkProject1 = "https://gym-shop-zarate-rivas.vercel.app/";
    const linkProject1Git = "https://github.com/Lautaro-Zarate/Gym-shop-Zarate"

    const linkProject2 = "https://lautaro-zarate.github.io/True-shop/"
    const linkProject2Git = "https://github.com/Lautaro-Zarate/True-shop"

    const linkProject3 = "https://rafasanzfotografo.com/"
    // const linkProject3Git = "https://github.com/Lautaro-Zarate/Simulador-noticias"
    
    const linkProject4 = "https://certezayderecho.cl/";
    const linkProject14Git = "https://github.com/Lautaro-Zarate/Certeza-Derecho-Estudio"
    return (
        <div className="projects" id="projects">
        <h2 className="project-title">Mis proyectos</h2>
        <div className="project-container">
            <img src="/project1.webp" alt="proyecto1" className="project__image"/>
            <div className="project__container-secondary">
                <img src="/brand-project1.png" alt="Logo de proyecto 1" className="project__brand"/>
                <p className="project__description"><b>Tienda de artefactos para Gimnasios: </b>
                Desarrollé una tienda de e-commerce especializada en equipos de gimnasio utilizando React para crear una interfaz de usuario dinámica y moderna. La aplicación cuenta con un carrito de compras funcional que permite agregar, eliminar y gestionar productos en tiempo real. También implementé un sistema de filtrado avanzado para facilitar la búsqueda de equipos por categorías y características. El proyecto es completamente responsive y aprovecha los componentes reutilizables de React para optimizar el rendimiento y la escalabilidad. Esta tienda refleja mi capacidad para trabajar con tecnologías modernas y crear aplicaciones web robustas y centradas en el usuario.</p>
                <div className="project__buttons-container">
                    <button className="btn-primary" onClick={() => window.open(linkProject1 , "_blank")}>Ver proyecto</button>
                    <button className="btn-secondary" onClick={() => window.open(linkProject1Git, "_blank")}>Git</button>   
                </div>
            </div>
        </div>
        <div className="project-container">
            <img src="/project4.png" alt="proyecto1" className="project__image"/>
            <div className="project__container-secondary">
                <img src="/brand-project4.svg" alt="Logo de proyecto 1" className="project__brand"/>
                <p className="project__description"><b>Landing Page para Estudio de Abogados: </b>
                Desarrollé una landing Page para estudio de abogados de Chile. Para el desarrollo de estas landing pages utilicé HTML y CSS para estructurar y estilizar el contenido, junto con JavaScript para agregar interactividad. Además, implementé Tailwind CSS como framework de estilos para optimizar el diseño responsivo y acelerar el desarrollo con clases utilitarias. Esta Landing refleja mi capacidad para trabajar con tecnologías modernas y crear aplicaciones web robustas y centradas en el usuario.</p>
                <div className="project__buttons-container">
                    <button className="btn-primary" onClick={() => window.open(linkProject4 , "_blank")}>Ver proyecto</button>
                    <button className="btn-secondary" onClick={() => window.open(linkProject14Git, "_blank")}>Git</button>   
                </div>
            </div>
        </div>
        <div className="project-container">
        <img src="/project2.webp" alt="proyecto2" className="project__image"/>
        <div className="project__container-secondary">
            <img src="/brand-project2.png" alt="Logo de proyecto 2" className="project__brand"/>
            <p className="project__description"><b>Tienda de Ropa Vintage: </b>
                Desarrollé una tienda virtual de ropa vintage utilizando HTML y CSS para la estructura y el diseño, complementados con JavaScript para la lógica interactiva. El proyecto cuenta con un carrito de compras completamente funcional, que permite a los usuarios agregar, eliminar y visualizar productos seleccionados. Además, implementé un sistema de filtrado por categorías y tipos de prendas, brindando una experiencia de navegación intuitiva y personalizada. Este proyecto destaca mi habilidad para crear aplicaciones web interactivas y responsivas, orientadas a mejorar la experiencia del usuario.</p>
            <div className="project__buttons-container">
                <button className="btn-primary" onClick={() => window.open(linkProject2, "_blank")}>Ver proyecto</button>
                <button className="btn-secondary" onClick={() => window.open(linkProject2Git, "_blank")}>Git</button>   
            </div>
        </div>
        </div>
        <div className="project-container">
        <img src="/project3.png" alt="proyecto3" className="project__image"/>
        <div className="project__container-secondary">
            <img src="/brand-project3.png" alt="Logo de proyecto 3" className="project__brand"/>
            <p className="project__description"><b>Landing Page - Fotógrafo </b>
            Desarrollé una Landing de un fotografo de españa junto a una agencia de desarrollo web llamada VINK utilizando HTML para la estructura del contenido y CSS para personalizar los estilos. Además, incorporé Bootstrap para lograr un diseño responsive y moderno de manera eficiente. Este proyecto incluye una interfaz de usuario atractiva con secciones organizadas, encabezados llamativos y un diseño adaptativo que se ajusta a diferentes dispositivos.</p>
            <div className="project__buttons-container">
                <button className="btn-primary" onClick={() => window.open(linkProject3, "_blank")}>Ver proyecto</button>
                <button className="btn-secondary" onClick={() => window.open()}>Git</button>   
            </div>
        </div>
        </div>
        </div>
    )
}
export default Projects;