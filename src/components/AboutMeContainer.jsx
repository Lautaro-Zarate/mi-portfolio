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
            <p>Soy un <b>desarrollador Front-End</b> con una fuerte orientación al <b>trabajo en equipo y la comunicación asertiva</b>. Disfruto colaborar con otras personas, compartir ideas y construir soluciones que aporten valor real.</p>
            <p>Me caracteriza la <b>capacidad para adaptarme a diferentes contextos, aprender nuevas tecnologías y resolver problemas de manera eficiente.</b></p>
            <p>Busco crear aplicaciones web que ofrezcan experiencias claras y accesibles, siempre priorizando la calidad del código y el impacto en los usuarios.</p>
        </div>
    )
}
export default AboutMeContainer;