const Projects = () => {
    const linkProject1 = "https://gym-shop-zarate-rivas.vercel.app/";
    const linkProject1Git = "https://github.com/Lautaro-Zarate/Gym-shop-Zarate"

    const linkProject2 = "https://lautaro-zarate.github.io/True-shop/"
    const linkProject2Git = "https://github.com/Lautaro-Zarate/True-shop"

    const linkProject3 = "https://rafasanzfotografo.com/"
    
    const linkProject4 = "https://certezayderecho.cl/";
    const linkProject14Git = "https://github.com/Lautaro-Zarate/Certeza-Derecho-Estudio"
    
    const linkProject5 = "https://matiemos.netlify.app/";
    const linkProject5Git = "https://github.com/Lautaro-Zarate/matiemos-"
    
    const linkProject6 = "https://crudflix-ts.netlify.app/";
    const linkProject6Git = "https://github.com/Lautaro-Zarate/CRUD-TS"

    
    return (
        <div className="projects" id="projects">
        <h2 className="project-title">Mis proyectos</h2>
        <div className="project-container">
            <img src="/project5.png" alt="proyecto1" className="project__image"/>
            <div className="project__container-secondary">
                <img src="/brand-project5.png" alt="Logo de proyecto 1" className="project__brand"/>
                <ul className="project__list">
                    <li>Desarrollo completo de una aplicación web en React.js para recomendar acompañamientos de desayuno/merienda según bebida preferida y clima local del usuario.</li>
                    <li>Implementación de lógica dinámica con useState, useEffect y useReducer; creación de un custom hook (useWeather) para obtener datos del clima.</li>
                    <li>Almacenamiento en localStorage, diseño responsive, animaciones con Material UI, y uso de archivos .webp para optimización de imágenes.</li>
                    <li>Uso de JSON como base de datos local para acompañamientos, con descripciones, imágenes y recetas.</li>
                    <li>Enfoque en UX/UI: interfaz simple, amigable, con interacción personalizada y visualmente clara.</li>
                    <li>Publicación progresiva del proyecto en redes, incluyendo prototipos, avances técnicos y versión final funcional.</li>
                </ul>
                <div className="project__buttons-container">
                    <button className="btn-primary" onClick={() => window.open(linkProject5 , "_blank")}>Ver proyecto</button>
                    <button className="btn-secondary" onClick={() => window.open(linkProject5Git, "_blank")}>Git</button>   
                </div>
            </div>
        </div>
        <div className="project-container">
            <img src="/project6.png" alt="proyecto1" className="project__image"/>
            <div className="project__container-secondary">
                <img src="/brand-project6.png" alt="Logo de proyecto 6" className="project__brand"/>
                <ul className="project__list">
                    <li>Creación, listado, edición y eliminación de películas/series.</li>
                    <li>Base de datos sincronizada con Firebase, donde cada acción actualiza los datos en tiempo real.</li>
                    <li>Animaciones de entrada/salida suaves con Framer Motion para mejorar la experiencia visual.</li>
                    <li>Uso de JSON como base de datos local para acompañamientos, con descripciones, imágenes y recetas.</li>
                    <li>Validaciones de formulario robustas con mensajes claros usando React Hook Form.</li>
                    <li>Arquitectura limpia y tipada con TypeScript, reforzando buenas prácticas de desarrollo escalable.</li>
                </ul>
                <div className="project__buttons-container">
                    <button className="btn-primary" onClick={() => window.open(linkProject6 , "_blank")}>Ver proyecto</button>
                    <button className="btn-secondary" onClick={() => window.open(linkProject6Git, "_blank")}>Git</button>   
                </div>
            </div>
        </div>
        <div className="project-container">
            <img src="/project1.webp" alt="proyecto1" className="project__image"/>
            <div className="project__container-secondary">
                <img src="/brand-project1.png" alt="Logo de proyecto 1" className="project__brand"/>
                <ul className="project__list">
                    <li>Desarrollo de una tienda e-commerce especializada en equipos de gimnasio utilizando React.js.</li>
                    <li>Creación de una interfaz de usuario dinámica, moderna y completamente responsive.</li>
                    <li>Implementación de un carrito de compras funcional con funcionalidades para agregar, eliminar y gestionar productos en tiempo real.</li>
                    <li>Desarrollo de un sistema de filtrado avanzado para facilitar la búsqueda por categorías y características.</li>
                    <li>Uso de componentes reutilizables de React para optimizar el rendimiento y la escalabilidad.</li>
                    <li>Enfoque en experiencia de usuario: aplicación robusta, intuitiva y centrada en facilitar la interacción del cliente.</li>
                </ul>

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
                <ul className="project__list">
                    <li>Desarrollo de una landing page para un estudio de abogados en Chile utilizando HTML y CSS para estructurar y estilizar el contenido.</li>
                    <li>Uso de JavaScript para agregar interactividad y mejorar la experiencia del usuario.</li>
                    <li>Implementación de Tailwind CSS como framework de estilos para optimizar el diseño responsivo y acelerar el desarrollo con clases utilitarias.</li>
                    <li>El proyecto refleja mi capacidad para trabajar con tecnologías modernas y crear aplicaciones web robustas, centradas en el usuario.</li>
                </ul>

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
            <ul className="project__list">
                <li>Desarrollo de una tienda virtual de ropa vintage utilizando HTML y CSS para la estructura y diseño, complementados con JavaScript para la lógica interactiva.</li>
                <li>Implementación de un carrito de compras funcional que permite agregar, eliminar y visualizar productos seleccionados.</li>
                <li>Desarrollo de un sistema de filtrado por categorías y tipos de prendas, mejorando la experiencia de navegación.</li>
                <li>Este proyecto destaca mi habilidad para crear aplicaciones web interactivas y responsivas, enfocadas en mejorar la experiencia del usuario.</li>
            </ul>

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
            <ul className="project__list">
                <li>Desarrollo de una landing page para un fotógrafo de España junto a la agencia de desarrollo web VINK.</li>
                <li>Uso de HTML para la estructura del contenido y CSS para personalizar los estilos.</li>
                <li>Incorporación de Bootstrap para lograr un diseño responsivo y moderno de manera eficiente.</li>
                <li>El proyecto incluye una interfaz de usuario atractiva con secciones organizadas, encabezados llamativos y un diseño adaptativo para diferentes dispositivos.</li>
            </ul>

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