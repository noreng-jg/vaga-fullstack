const base_path='http://127.0.0.1:8000/';

async function postData(url = '', data = {}) {    
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

function get_user(){
  return document.getElementById("user").value;
}
function get_pass(){
  return document.getElementById("pass").value;
}

function previous_path(){
  return location.pathname.substring(0, location.pathname
    .lastIndexOf('/'));
}

function show_console_response(){
dados={};
dados['username']=get_user();
dados['password']=get_pass();
response=postData(base_path+'login/',dados);
response.then((dados)=>{
//manage wrong data with alerts
var data={
  token_type:'Token',
  access_token:dados.key
}
window.localStorage.setItem('token',  JSON.stringify(data));
location.assign(previous_path()+'/tarefas/todos.html');
});
}


