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
                <img src="/public/html.webp" alt="HTML" className="icon-languages"/>
                <img src="/public/css.webp" alt="CSS" className="icon-languages"/>
                <img src="/public/js.webp" alt="JAVASCRIPT" className="icon-languages"/>
                <img src="/public/react.webp" alt="REACT" className="icon-languages"/>
                <img src="/public/vite.webp" alt="VITE" className="icon-languages"/>
                <img src="/public/sass.webp" alt="SASS" className="icon-languages"/>
                <img src="/public/git.webp" alt="GIT" className="icon-languages"/>
                <img src="/public/tailwind.webp" alt="TAILWIND" className="icon-languages"/>
                <img src="/public/bootstrap.webp" alt="BOOTSTRAP" className="icon-languages"/>
                <img src="/public/figma.webp" alt="FIGMA" className="icon-languages"/>
            </ul>
            <h3>Lenguajes en proceso de aprendizaje: </h3>
            <ul>
                <img src="/public/nodejs.webp" alt="NODE-JS" className="icon-languages"/>
                <img src="/public/nextjs.webp" alt="NEXT-JS" className="icon-languages"/>
            </ul>
        </div>
    )
}
export default Languages;