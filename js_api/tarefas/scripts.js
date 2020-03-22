const url='https://jsonplaceholder.typicode.com/todos';

axios.get(url)
  .then(function (response) {
    
    data=response.data;
    console.log(data[0].id);
    //ir jogando e construindo a lógica
  })
  .catch(function (error) {
    // mostra erro, mudar posteriormente para um alert
    console.log(error);
  })
  .then(function () {
    // sempre executada, independente da resposta
  });