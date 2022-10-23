import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext";

import "./LoginForm.scss";

const LoginForm = () => {
    const email = useRef(null) as any;
    const password = useRef(null) as any;

    const { handleLogin } = useAuth();

    async function login(event: FormEvent) {
        event.preventDefault();

        console.log({ email, password })
    
        try {
          await handleLogin(email?.current?.value, password?.current?.value);
        } catch (error) {
          console.log({error})
        }
    }

    return (
        <div className="LoginForm">
            <h1 className="LoginForm_title">Seja bem vindo ao E-Health</h1>

            <form onSubmit={login} className="LoginForm_formBox">
                <input ref={email} className="LoginForm_input" type="email" placeholder="E-mail" />

                <input ref={password} className="LoginForm_input" type="password" placeholder="Senha" />

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
