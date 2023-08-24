import { useState } from "react";
import Formulario from "./Formulario";

export default function Publicacao({ id,titulo, conteudo, aoSalvar, aoExcluir}) {

    const [estahEditando, setEstahEditando] = useState(false);

    function salvaredicao(novoTitulo, novoConteudo) {
        aoSalvar(id, novoTitulo, novoConteudo);
        setEstahEditando(false);
    }

    function aoClicarEmEditar() {
        setEstahEditando(true);
    }

    function aoClicarEmExcluir() {
        aoExcluir(id);
    }

    return (
        <div className="pub">
            {estahEditando && <Formulario aoSalvar={salvaredicao} tituloPadrao={titulo} textoPadrao={conteudo} />}
            <h2> {titulo} </h2>
            <p> {conteudo} </p>
            <div>
                <button type="button" className="editar"onClick={aoClicarEmEditar}>Editar</button>
                <button type="button" className="excluir" onClick={aoClicarEmExcluir}>Excluir</button>
            </div>
        </div>
    );
}