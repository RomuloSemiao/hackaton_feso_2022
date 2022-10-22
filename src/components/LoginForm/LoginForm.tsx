import { Link } from "react-router-dom"

import "./LoginForm.scss";

const LoginForm = () => {
    return (
        <div className="LoginForm">
            <h1 className="LoginForm_title">Seja bem vindo ao E-Health</h1>

            <form className="LoginForm_formBox" action="submit">
                <input className="LoginForm_input" type="email" placeholder="E-mail" />

                <input className="LoginForm_input" type="password" placeholder="Senha" />

                <div className="LoginForm_buttonBox">
                    <Link className="LoginForm_button LoginForm_button--cad" to="/cadastre">
                        CRIAR CONTA
                    </Link>

                    <button className="LoginForm_button LoginForm_button--log" type="submit">
                        ENTRAR
                    </button>
                </div>
            </form>

        </div>
    )
}

export { LoginForm }
