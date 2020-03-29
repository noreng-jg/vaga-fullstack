import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';


import {useHistory} from 'react-router-dom';


export default function Profile(){

    const [tarefas, setTarefas]=useState([]);
    const [descricao, setDescricao]=useState('');
    const [concluida, setConcluida]=useState('');
    const token=localStorage.getItem('token');
    const nomeUsuario=localStorage.getItem('usuario');
    const [edit, setEdit]=useState('');

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

    //atualiza a checkbox e nome da edição
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
                               
                        <div class="checkArea">
                        <input type="checkbox" 
                        value={concluida}
                        onChange={e=> {setConcluida(e.target.checked); 
                        handleState(id, nome_tarefa,e.target.checked)}}
                        defaultChecked={completada}/>       
                        </div>

                        <div class="textArea">
                            <input placeholder={nome_tarefa} onChange={(edit)=>setEdit(edit.target.value)}>
                                
                            </input>
                        </div>

                        <div class="updateArea">
                        <button 
                        class="btn btn-primary"
                        onClick={()=>{
                        handleState(id, edit,completada)
                        }}
                        >
                        Salvar edição    
                        </button>
                        </div>

                        <div class="deleteArea">
                            <button 
                            class="btn btn-danger"
                            onClick={
                                ()=>handleDelete(id)    
                            }
                            >
                            Excluir    
                            </button>
                        </div>


                    </div>
                </li>
        
        );
    }
    

    //devolve o html formatado
    return (
        <div className="tasks-container">
            
            <div className="logoutArea">
            <button onClick={handleLogout} class="btn btn-dark">Logout</button>
            </div>

            <div className="Header-tasks">
            
                <h4>Olá, {nomeUsuario}</h4>
                <br/>
                
                <div class="row">
                <input id="texto_de_tarefa"
                type="text"
                placeholder="Entre com a sua tarefa"
                className="newTaskInput"
                value={descricao}
                onChange={e=> setDescricao(e.target.value)}
                required/>

                <input 
                id="botao_de_adicionar" 
                type="button" 
                onClick={handleNewTask} 
                class="btn btn-success" 
                value="Adicionar tarefa" />
                </div>
                
            </div>

            <ul>
            {tarefas.map(tarefa =>(
                cria_uma_linha(tarefa.descricao,tarefa.concluida, tarefa.id)
                )
            )}
            
            </ul>
        </div>
    );
}
