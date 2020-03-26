async function getData(url = '') {
    const response = await fetch(url, {
      method: 'GET', 
      headers: {
        'Authorization': data.token_type + ' ' + data.access_token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
    return response.json(); 
}

const base_path='http://127.0.0.1:8000/';

getData(base_path+'tarefas/')
.then((data) => {
    preencher_tarefas(data);
});



//elemento li
function cria_uma_linha(dado){

    var li = document.createElement("li");

    var divlist= document.createElement("div");

    var delitem= document.createElement("div");
    delitem.id=dado.id;
    delitem.className="deletearea";
    var ard= document.createElement("button");
    var id=document.createElement('i');
    id.className="delete-icon glyphicon glyphicon-trash";
    ard.appendChild(id);
    delitem.appendChild(ard)

    var updateitem= document.createElement("div");
    updateitem.id=dado.id;
    updateitem.className="updatearea";
    var aru= document.createElement("button");
    var ic= document.createElement('i');
    ic.className="delete-icon glyphicon glyphicon-pencil";
    aru.appendChild(ic);
    updateitem.appendChild(aru)
  
    var checkitem= document.createElement("div");
    var box= document.createElement("input");
    box.type="checkbox";
    box.checked=dado.concluida;
    box.value=dado.id;
    checkitem.appendChild(box);
    checkitem.className="check";
  
    var nameitem=document.createElement("div");
    var nome=document.createTextNode(dado.descricao);
    nameitem.appendChild(nome);

    divlist.append(delitem,updateitem,checkitem,nameitem);
    divlist.className="row";

    li.appendChild(divlist);

    return li;
}

//atualiza as tarefas na pagina
function preencher_tarefas(dados){
    
    for(i=0; i<dados.length;i++){
        
        li=cria_uma_linha(dados[i]);

        //Filtro das tarefas de acordo com a conclusao     
        if (!dados[i].concluida)
            document.getElementById("concluidas").appendChild(li);
        else
            document.getElementById("nao_concluidas").appendChild(li);
    }
}