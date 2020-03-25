fetch('http://127.0.0.1:8000/login/', {
    
    method:'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
    .then(res=> res.json())
    .then(json => console.log(json));
