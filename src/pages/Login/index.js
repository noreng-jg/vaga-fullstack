import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import api from '../../services/api';


export default function Login(){

    const [username, setLoginUsername]=useState('');
    const [password, setLoginPassword]=useState('');

    const history=useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const logindata={
            username,
            password
        }

        try{
            const response = await api.post('login/', logindata,
            {
                headers:{
                    'content-type': 'application/json'
                }
            }
            
            );
            //salvar o token de autenticacao para o restante do uso na aplicacao
            localStorage.setItem('token', response.data.key);
            localStorage.setItem('usuario', username);

            history.push('/tarefas');
        }
        catch(erro){
            alert('Falha no Login, digite novamente suas credencias.'); 
        }
    }


    return (
    <div className="logintask">
    <form onSubmit={handleLogin}>
    <h1>Lista de Tarefas</h1>
    <input 
    placeholder="Entre com o usuário"
    value={username}
    onChange={e=>setLoginUsername(e.target.value)}
    />
    <input 
    placeholder="Entre com a senha"
    type="password"
    value={password}
    onChange={e=>setLoginPassword(e.target.value)}
    />  
    <button type="submit">Entrar</button>
    <Link to='/signup'>
        Não tem registro?
    </Link>
    </form>        
    </div>
    );
}