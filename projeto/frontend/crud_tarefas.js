data=JSON.parse(window.localStorage.getItem('token'));

const url='http://127.0.0.1:8000/tarefas/';

function get_text(){
    return document.getElementById("texto_de_tarefa").value;
}

function cria_dado(){
  dado={};
  dado.descricao=get_text();
  dado.concluida=false;
  return dado;
}

function get_list(){

}


async function postTask(dado) {
    
    const response = await fetch(url, {
      method: 'POST',
      
      cache: 'default', 
      credentials: 'omit', 
      headers: {
        'Authorization': data.token_type + ' ' + data.access_token, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dado)
    });
    return response.json(); 
}

async function destroyTask(id_number) {
    
  const response = await fetch(url+ id_number.toString(),{
    method: 'DELETE',
    mode:'cors',
    cache: 'default', 
    credentials: 'omit', 
    headers: {
      'Authorization': data.token_type + ' ' + data.access_token, 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    
  }); 
}


async function updateTask(id_number) {
    
  const response = await fetch(url+ id_number.toString(),{
    method: 'PUT',
    mode:'cors',
    cache: 'default', 
    credentials: 'omit', 
    headers: {
      'Authorization': data.token_type + ' ' + data.access_token, 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    
  }); 
}

function createTask(){
postTask(cria_dado());
location.reload();
}




