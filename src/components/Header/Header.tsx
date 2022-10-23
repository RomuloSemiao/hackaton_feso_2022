import { Link } from "react-router-dom"

import { Logo } from "../../assets/Logo";
import { useAuth } from "../../contexts/AuthContext";

import "./Header.scss"

const Header = () => {
    const { authorized } = useAuth();
    const showHeader = ["/home", "/home/make-appointment", "/home/fast-appointment"];

    return (
        <header className="Header">
            <Link className="Header_logo" to="/home">
                <Logo />
            </Link>

            {(authorized && showHeader.includes(window.location.pathname)) && (
                <nav className="Header_nav">
                    <ul className = "Header_list">
                        <li className="Header_list-item">
                            <Link className="Header_link" to="/home">Home</Link>
                        </li>
                        <li className="Header_list-item">
                            <Link className="Header_link" to="/home/make-appointment">Marcar Consulta</Link>
                        </li>
                        <li className="Header_list-item">
                            <Link className="Header_link" to="/home/fast-appointment">Consulta Rápida</Link>
                        </li>
                    </ul>
                </nav>
            )}

            
        </header>
    )    
}

export { Header };