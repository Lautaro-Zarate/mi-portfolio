import { useInView } from "react-intersection-observer";
const Languages = () => {
    const {ref, inView}= useInView({
        threshold: 0.3,
    });
    return(
        <div id="languages" className="languages-container" 
        ref={ref} 
        style={{opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(50px)', transition: 'all 1s'}}>
            <h2>Lenguajes y herramientas que manejo:</h2>
            <ul>
                <img src="/html.webp" alt="HTML" className="icon-languages"/>
                <img src="/css.webp" alt="CSS" className="icon-languages"/>
                <img src="/js.webp" alt="JAVASCRIPT" className="icon-languages"/>
                <img src="/react.webp" alt="REACT" className="icon-languages"/>
                <img src="/vite.webp" alt="VITE" className="icon-languages"/>
                <img src="/sass.webp" alt="SASS" className="icon-languages"/>
                <img src="/git.webp" alt="GIT" className="icon-languages"/>
                <img src="/tailwind.webp" alt="TAILWIND" className="icon-languages"/>
                <img src="/bootstrap.webp" alt="BOOTSTRAP" className="icon-languages"/>
                <img src="/figma.webp" alt="FIGMA" className="icon-languages"/>
            </ul>
            <h3>Lenguajes en proceso de aprendizaje: </h3>
            <ul>
                <img src="/nodejs.webp" alt="NODE-JS" className="icon-languages"/>
                <img src="/nextjs.webp" alt="NEXT-JS" className="icon-languages"/>
            </ul>
        </div>
    )
}
export default Languages;