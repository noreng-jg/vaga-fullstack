var data = {
	access_token: "e7ec9edb09bec28c97f65345520b4ee89b4490eb",
	token_type: "Token"
};

fetch('http://127.0.0.1:8000/tarefas/', {
    
    method:'GET',
    headers: {
        'Authorization': data.token_type + ' ' + data.access_token,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
    .then(res=> res.json())
    .then(json => console.log(json));
