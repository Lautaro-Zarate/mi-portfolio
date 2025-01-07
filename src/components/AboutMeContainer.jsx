import { useInView } from "react-intersection-observer";
const AboutMeContainer = () => {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })
    return(
        <div id="about-me" className="about-me-container" ref={ref} style={{
            opacity: inView ? 1 : 0,
            filter: inView ? "blur(0px)" : "blur(10px)",
            transition: "all 0.8s ease-out",
        }}>
            <h2>Sobre mí</h2>
            <p>Me llamo <b>Lautaro Zarate Rivas</b>, tengo <b>25 años</b> y soy de <b>Argentina - Salta.</b></p>
            <p>Soy un apasionado desarrollador web <b>front-end </b>con experiencia en tecnologías como <b>HTML, CSS, JavaScript, React y Tailwind CSS. </b></p> <p> Mi enfoque principal es crear soluciones digitales que sean funcionales, atractivas y optimizadas para cualquier dispositivo.</p>
            <p>Desde que comencé mi carrera, he trabajado en proyectos como <b>e-commerce, landing pages y otras aplicaciones web </b>, siempre buscando aprender y perfeccionar mis habilidades. <b>Me encanta resolver problemas, trabajar en equipo y mantenerme actualizado con las últimas tendencias tecnológicas. </b></p>
            <p>Además, disfruto colaborar con clientes para llevar sus ideas al siguiente nivel, convirtiéndolas en proyectos reales que generen impacto.</p>
            <p>Cuando no estoy programando, me gusta practicar meditación, correr y explorar nuevas formas de mejorar tanto en lo personal como en lo profesional.</p>
            <p>✨<b> Si tienes un proyecto en mente o necesitas ayuda con el desarrollo web, ¡estaré encantado de ayudarte! </b></p>
        </div>
    )
}
export default AboutMeContainer;