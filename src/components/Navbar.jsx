import { Link } from "react-scroll";
import Brand from "./Brand";
const Navbar = () => {
    return(
        <div>
            <nav className="navbar-container">
                <Link to={"home"} smooth={true} ><Brand/></Link>
                <div className="nav-links">
                    <Link to={"home"} className={"NavLink"} smooth={true}>Inicio</Link>
                    <Link to={"about-me"} smooth={true} offset={-90} className={"NavLink"}>Sobre mí</Link>
                    <Link to={"projects"} className={"NavLink"} offset={-90} smooth={true}>Proyectos</Link>
                    <Link to={"certificate"} className={"NavLink"} offset={-100} smooth={true}>Certificados</Link>
                    <Link to={"contact"} smooth={true} className={"NavLink"}>Contacto</Link>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;