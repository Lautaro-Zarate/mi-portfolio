import { motion } from "framer-motion";
const Languages = () => {

    const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    };

    return(
        <section id="languages" className="languages-container">
            <h2>Lenguajes y herramientas que manejo:</h2>
            <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut"}}
            >
                <img src="/html.webp" alt="HTML" className="icon-languages"/>
                <img src="/css.webp" alt="CSS" className="icon-languages"/>
                <img src="/js.webp" alt="JAVASCRIPT" className="icon-languages"/>
                <img src="/react.webp" alt="REACT" className="icon-languages"/>
                <img src="/ts.webp" alt="TYPESCRIPT" className="icon-languages"/>
                <img src="/git.webp" alt="GIT" className="icon-languages"/>
                <img src="/github.webp" alt="GITHUB" className="icon-languages"/>
                <img src="/vite.webp" alt="VITE" className="icon-languages"/>
                <img src="/sass.webp" alt="SASS" className="icon-languages"/>
                <img src="/tailwind.webp" alt="TAILWIND" className="icon-languages"/>
                <img src="/bootstrap.webp" alt="BOOTSTRAP" className="icon-languages"/>
                <img src="/figma.webp" alt="FIGMA" className="icon-languages"/>
                <img src="/materialui.webp" alt="MATERIAL-UI" className="icon-languages"/>
                <img src="/redux.webp" alt="REDUX" className="icon-languages"/>
            </motion.ul>
            <h3>Lenguajes en proceso de aprendizaje: </h3>
            <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut"}}
            >
                <img src="/nodejs.webp" alt="NODE-JS" className="icon-languages"/>
                <img src="/nextjs.webp" alt="NEXT-JS" className="icon-languages"/>
            </motion.ul>
        </section>
    )
}
export default Languages;