import { FormEvent, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./CadForm.scss";

const CadForm = () => {
    const { handleCreateAccount } = useAuth();

    const name = useRef(null) as any;
    const lastName = useRef(null) as any;
    const gender = useRef(null) as any;
    const age = useRef(null) as any;
    const height = useRef(null) as any;
    const weight = useRef(null) as any;
    const email = useRef(null) as any;
    const password = useRef(null) as any;
    const confirmPassword = useRef(null) as any;

    async function createAccount(event: FormEvent) {
        event.preventDefault();
    
        await handleCreateAccount({
            name: name?.current?.value,
            lastName: lastName?.current?.value,
            gender: gender?.current?.value,
            age: age?.current?.value,
            height: height?.current?.value,
            weight: weight?.current?.value,
            email: email?.current?.value,
            password: password?.current?.value,
            confirmPassword: confirmPassword?.current?.value,
        });
      }

    return (
        <div className="CadForm">
            <h2 className="CadForm_title">Crie sua conta para ser atendido da melhor forma :)</h2>

            <form className="CadForm_formBox" onSubmit={createAccount}>
                <div className="CadForm_boxInput">
                    <input ref={name} className="CadForm_input" type="text" placeholder="Nome" />

                    <input ref={lastName} className="CadForm_input" type="text" placeholder="Sobrenome" />

                    <input ref={gender} className="CadForm_input" type="text" placeholder="Sexo" />

                    <input ref={age} className="CadForm_input" type="number" placeholder="Idade" />

                    <input ref={height} className="CadForm_input" type="number" placeholder="Altura" />

                    <input ref={weight} className="CadForm_input" type="number" placeholder="Peso" />

                    <input ref={email} className="CadForm_input" type="email" placeholder="E-mail" />

                    <input ref={password} className="CadForm_input" type="password" placeholder="Senha" />

                    <input ref={confirmPassword} className="CadForm_input" type="password" placeholder="Confirmar Senha" />
                </div>

                <button className="CadForm_button" type="submit">
                    CRIAR CONTA
                </button>
            </form>
        </div>
    )
};

export { CadForm };