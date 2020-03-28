import React from 'react';

export default function Profile(){
    return (
        <div className="tasks-container">
            <h2>Minha lista de Tarefas</h2>
            <input id="texto_de_tarefa" type="text" placeholder="Entre com a sua tarefa"  required/>
            <input id="botao_de_adicionar" type="button" onclick="createTask()" class="btn btn-success" value="Adicionar tarefa" />
            <ul id="concluidas">    
            </ul>
            <ul id="nao_concluidas">    
            </ul>
        </div>
    );
}
