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
            <p>Desde que descubrí la programación me ha encantado, he trabajado durante un tiempo hasta obtener mi computadora.</p>
            <p>Empece a estudiar en inicios del 2024 la carrera de <b>Front-End especializado en el framework REACT en CoderHouse.</b></p>
            <p>Me encanta aprender y día a día estoy practicando y aprendiendo para mejorar mis habilidades.🚀</p>
        </div>
    )
}
export default AboutMeContainer;