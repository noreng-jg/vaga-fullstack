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







postData('http://127.0.0.1:8000/login/', {
    "username": "vagner",
    "password": "postgres"
})
.then((data) => {
    console.log(data); 
});
