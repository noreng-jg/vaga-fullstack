var data = {
	access_token: "e7ec9edb09bec28c97f65345520b4ee89b4490eb",
	token_type: "Token"
};

async function createData(url = '', data = {}) {
    
    const response = await fetch(url, {
      method: 'POST', 
      cache: 'default', 
      credentials: 'omit', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json(); 
}

async function deleteData(url = '', data = {}) {
    
    const response = await fetch(url, {
      method: 'DELETE', 
      cache: 'default', 
      credentials: 'omit', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json(); 
  }


function get_text(){
    return document.getElementById("texto_de_tarefa").value;
}

function cria_dado(){
  dado={};
  dado.descricao=get_text();
  dado.concluida=false;
  return dado;
}

const url='http://127.0.0.1:8000/tarefas/';

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

function createTask(){
postTask(cria_dado());
location.reload();
}





