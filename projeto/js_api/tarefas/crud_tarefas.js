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

createData('http://127.0.0.1:8000/tarefas/', {
    "username": "vagner",
    "password": "postgres"
})
.then((data) => {
    console.log(data); 
});
