import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';


import {useHistory} from 'react-router-dom';

import './modalbox.css';

export default function Profile(){

    const [tarefas, setTarefas]=useState([]);
    
    const [descricao, setDescricao]=useState('');
    const [concluida, setConcluida]=useState('');
    //const [state, setState]=useState('');
    const token=localStorage.getItem('token');
    const nomeUsuario=localStorage.getItem('usuario');
    const [edit, setEdit]=useState('');
    //edit=true;
    const history=useHistory();


    function reloadPage(){
        api.get('tarefas/',{
            headers:{
                "content-type": "application/json",
                Authorization: 'Token '+ token
            }
        }).then(response=>{
            setTarefas(response.data)
        
        })
    }

    //Manter a página com as credenciais
    useEffect(()=>{
        api.get('tarefas/',{
            headers:{
                "content-type": "application/json",
                Authorization: 'Token '+ token
            }
        }).then(response=>{
            setTarefas(response.data)
    
        })
    },[token]);


    async function handleDelete(id){

        try{
            await api.delete(`tarefas/${id}/`,{
                headers:{
                "content-type": "application/json",
                  Authorization:'Token '+token  
                }
            });        
        //Faz delete em tempo real na tela
        setTarefas(tarefas.filter(tarefa=>
        tarefa.id !== id    
        ));
        }
        catch(err){
            alert('Erro ao deletar');
        }
    }

    //atualiza a checkbox
    async function handleState(id,nome_tar, valor){
        const retorno={
            id:id,
            descricao:nome_tar,
            concluida:valor
        }
        try{
            await api.put(`tarefas/${id}/`,retorno, {
                headers:{
                "content-type": "application/json",
                  Authorization:'Token '+token  
                }
            });        
        //Faz delete em tempo real na tela
        reloadPage();
        
        }
        catch(err){
            alert('Erro ao atualizar');
            console.log(retorno)
        }
    }

    function handleLogout(){
        //apaga token do navegador
        localStorage.clear();
        history.push('/');
    }

    async function handleNewTask(e){
        e.preventDefault();
        const concluida=false;

        const dados={
            descricao,
            concluida
        };

        try{
            await api.post('/tarefas/', dados ,{
                headers:{
                    "content-type": "application/json",
                    Authorization: "Token " + token
                }
            })
            reloadPage();
        }
        catch(err){
            alert('Erro ao criar nova tarefa')
        }

    }

    
    function cria_uma_linha(nome_tarefa, completada, id){
        return (

            <li key ={id}>
                <div class="row">
                        <div class="deleteArea">
                            <button 
                            class="btn btn-danger"
                            onClick={
                                ()=>handleDelete(id)    
                            }
                            >
                            Deletar    
                            </button>
                        </div>

                        <div class="updateArea">
                            <button 
                            class="btn btn-primary"
                            onClick={e=>{setEdit(e.target.checked)}}
                            >
                            Editar    
                            </button>
                        </div>
                            
                        <div class="checkArea">
                        <input type="checkbox" 
                        value={concluida}
                        onChange={e=> {setConcluida(e.target.checked); 
                        handleState(id, nome_tarefa,e.target.checked)}}
                        defaultChecked={completada}/>       
                        </div>

                        <div class="textArea">
                            <input placeholder={nome_tarefa} 
                            disabled={edit}>
                                
                            </input>
                        </div>
                    </div>
                </li>
        
        );
    }
    


    return (
        <div className="tasks-container">
            <h4>Olá, {nomeUsuario}</h4>
            <br/>
            <input id="texto_de_tarefa"
            type="text"
            placeholder="Entre com a sua tarefa"
            value={descricao}
            onChange={e=> setDescricao(e.target.value)}
            required/>

            <br/><br/>

            <input 
            id="botao_de_adicionar" 
            type="button" 
            onClick={handleNewTask} 
            class="btn btn-success" 
            value="Adicionar tarefa" />

            <button onClick={handleLogout} class="btn btn-dark">Logout</button>
            <ul>
            {tarefas.map(tarefa =>(
                cria_uma_linha(tarefa.descricao,tarefa.concluida, tarefa.id)
                )
            )}  
            </ul>
        </div>
    );
}
