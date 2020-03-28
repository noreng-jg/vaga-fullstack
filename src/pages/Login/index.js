import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function Login(){
    return (
    <div className="logintask">
    <form>
    <h1>Lista de Tarefas</h1>
    <input placeholder="Entre com o usuário"/>
    <input placeholder="Entre com a senha"/>  
    <button type="submit">Entrar</button>
    <Link to='/signup'>
        Não tem registro?
    </Link>
    </form>        
    </div>
    );
}