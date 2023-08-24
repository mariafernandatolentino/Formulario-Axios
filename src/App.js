import axios from 'axios';
import {useEffect, useId, useState} from 'react';
import './App.css';
import Publicacao from './Publicacao';
import Formulario from './Formulario';
import Mensagem from './Mensagem';

function App() {
  const [publicacoes, setPublicacoes] = useState ([]);
  const [mensagem, setMensagem] = useState(null);

  useEffect (() => {
    listar();
  }, []);

  function listar() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(resposta => {
      setPublicacoes(resposta.data);
    })
  }

  function salvarTexto(titulo,texto) {
    const carga ={
      userId: 1,
      title: titulo,
      body: texto,

    }
    axios.post(`https://jsonplaceholder.typicode.com/posts`, carga)
    .then((resposta) => {
      setMensagem("Publicação criada com sucesso");
    });
  }

  function aoFecharMensagem() {
    setMensagem(null);
  }

  function editarPublicacao(id, titulo, texto) {
    const carga = {
      id: id,
      useId: 1,
      title: titulo,
      body: texto
    };
    axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`, carga)
      .then((resposta) => {
        setMensagem("Publicação editada com sucesso");
    });
  }
  function excluirPublicacao(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resposta) => {
        setMensagem("Publicação excluida com sucesso");
    });
  }

  return (
    <div className="App">
      {mensagem && <Mensagem texto={mensagem} aoFechar={aoFecharMensagem} />}
      <Formulario aoSalvar={salvarTexto}/>
      <div>
        {publicacoes.map((publicacao) => {
          return <Publicacao
          key = {publicacao.id}
          id = {publicacao.id}
          titulo = {publicacao.title} 
          conteudo = {publicacao.body}
          aoSalvar={editarPublicacao}
          aoExcluir={excluirPublicacao}
          />
        })}
      </div>
    </div>
  );
}

export default App;
