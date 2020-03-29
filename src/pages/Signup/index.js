import React, {useState} from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

export default function Signup(){

    const [username, SetName]=useState('');//valor e atualiza valor
    const [email, SetEmail]=useState('');
    const [first_name, Setfirst_name]=useState('');
    const [last_name, Setlast_name]=useState('');
    const [password, Setpassword]=useState('');
    const [password2, Setpassword2]=useState('');

    const history=useHistory();

    async function HandleRegister(event){
        event.preventDefault();//previnir refresh
        
        const register =
            {
                username,
                email,
                first_name,
                last_name,
                password,
                password2
            }
        //criando a requisição
        try{
            const response = await api.post('/signup/', register,
            {
                
                headers:{
                    "content-type": "application/json",
                }
            }
            );    
            alert(`Cadastro concluido com sucesso: ${Object.values(response)[1]}`);
            history.push('/');
        }
        catch(e){
            alert('Erro no cadastro');
        }
    }

    return (
    <div className="registerbox">
    <h1>Cadastro</h1>

    <form onSubmit={HandleRegister}>
        <input 
        placeholder="Nome para o usuário"
        value={username}
        onChange={e=>SetName(e.target.value)}
        />

        <input 
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e=>SetEmail(e.target.value)}
        />

        <input 
        placeholder="Primeiro nome"
        value={first_name}
        onChange={e=>Setfirst_name(e.target.value)}
        />

        <input 
        placeholder="Último nome"
        value={last_name}
        onChange={e=>Setlast_name(e.target.value)}
        />

        <input
        type="password" 
        placeholder="Senha"
        value={password}
        onChange={e=>Setpassword(e.target.value)}
        />

        <input 
        type="password"
        placeholder="Confirme a senha"
        value={password2}
        onChange={e=>Setpassword2(e.target.value)}
        />

        <button className="button" type="submit">
            Cadastrar
        </button>

    </form>
    <Link to='/'>
        Voltar ao login
    </Link>    
    </div> 
    );
}