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

function show_console_response(){
dados={};
dados['username']=get_user();
dados['password']=get_pass();
response=postData('http://127.0.0.1:8000/login/',dados);
response.then((dados)=>{

//Validation of the response

//alert

});
}

function print_type(){
  console.log(get_user())
}

