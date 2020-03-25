var data = {
	access_token: "e7ec9edb09bec28c97f65345520b4ee89b4490eb",
	token_type: "Token"
};


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



function preencher_tarefas(dados){
    for(i=0; i<dados.length;i++){
        
        var li = document.createElement("li");

        var divlist= document.createElement("div");

        var delitem= document.createElement("div");
        delitem.id=dados[i].id;
        delitem.className="deletearea";
        var ard= document.createElement("a");
        var id=document.createElement('i');
        id.className="delete-icon glyphicon glyphicon-trash";
        ard.appendChild(id);
        delitem.appendChild(ard)

        var updateitem= document.createElement("div");
        updateitem.id=dados[i].id;
        updateitem.className="updatearea";
        var aru= document.createElement("a");
        var ic= document.createElement('i');
        ic.className="delete-icon glyphicon glyphicon-pencil";
        aru.appendChild(ic);
        updateitem.appendChild(aru)
        
        var checkitem= document.createElement("div");
        var box= document.createElement("input");
        box.type="checkbox";
        box.checked=dados[i].concluida;
        box.value=dados[i].id;
        checkitem.appendChild(box);

        var nameitem=document.createElement("div");
        var nome=document.createTextNode(dados[i].descricao);
        nameitem.appendChild(nome);

        divlist.append(delitem,updateitem,checkitem,nameitem);
        //automatizar o preenchimento de todos os itens...
        li.appendChild(divlist);
        //Filtro das tarefas de acordo com a conclusao     
        if (!dados[i].concluida)
            document.getElementById("concluidas").appendChild(li);
        else
            document.getElementById("nao_concluidas").appendChild(li);
    }
}