import { Logo } from "../../assets/imgs/Logo";

import "./Header.scss"

const Header = () => {
    return (
        <header className="header">
            <a className="header_logo" href="#">
                <Logo />
            </a>

            <nav className="header_nav">
                <ul className = "header_list">
                    <li className="header_list-item">
                        <a className="header_link" href="#">Home</a>
                    </li>
                    <li className="header_list-item">
                        <a className="header_link" href="#">Marcar Consulta</a>
                    </li>
                    <li className="header_list-item">
                        <a className="header_link" href="#">Consulta Rápida</a>
                    </li>
                </ul>
            </nav>
        </header>
    )    
}

export { Header };