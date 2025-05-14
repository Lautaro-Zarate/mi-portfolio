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
            <p>Hola, soy <b>Lautaro Zarate Rivas</b>, <b>desarrollador web front-end </b>de Salta, Argentina. Tengo 25 años y me especializo en crear soluciones digitales funcionales y atractivas usando tecnologías como HTML, CSS, JavaScript, React.</p>
            <p>He trabajado en proyectos de <b>e-commerce, landing pages y aplicaciones web</b>, siempre enfocado en mejorar mis habilidades, resolver problemas y colaborar en equipo. Me apasiona transformar ideas en productos reales que generen impacto.</p>
        </div>
    )
}
export default AboutMeContainer;