import React from 'react';
import './styles.css'

export default function Login(){
    return (
    <div className="logintask">
    <form>
    <h1>Lista de Tarefas</h1>
    <input placeholder="Entre com o usuário"/>
    <input placeholder="Entre com a senha"/>  
    <button type="submit">Entrar</button>
    <a href='/regitro'>
        Não tem registro?
    </a>
    </form>        
    </div>
    );
}