import {useState} from "react";

export default function Formulario({ aoSalvar, tituloPadrao, textoPadrao }) {
    const [titulo, setTitulo] = useState(tituloPadrao);
    const [texto,setTexto] = useState(textoPadrao);

    function aoAlterar(evento){
        setTexto(evento.target.value);
        console.log(evento.target.value);
    }

    function aoAlterarTitulo(evento) {
        setTitulo(evento.target.value);
    }

    function aoClicar() {
        if (titulo == null || titulo.length == 0) {
            alert('O campo título é obrigatório')
            return;
        }
        if (texto == null || texto.length == 0) {
            alert('O campo texto é obrigatório')
            return;
        }
        aoSalvar(titulo,texto);
        setTitulo('');
        setTexto('');
    }


    return (
        <form className="formulario">
            <label>Titulo:</label>
            <input type = "text" onChange={aoAlterarTitulo} value={titulo} />

            <label>Texto:</label>
            <textarea onChange={aoAlterar}value={texto}></textarea>

            <button type = 'button'onClick={aoClicar}> Salvar </button>
        </form>
    );
}