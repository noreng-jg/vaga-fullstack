const url='https://jsonplaceholder.typicode.com/todos';


function pegar9primeiros(dados){
    let arr= new Array();
    for(i=0; i<9; i++){
        arr.push(dados[i])    
    }
    return arr;
}

axios.get(url)
  .then(function (response) {
    data=pegar9primeiros(response.data);
    console.log(data);
    //ir jogando e construindo a lógica
  })
  .catch(function (error) {
    // mostra erro, mudar posteriormente para um alert
    console.log(error);
  })
  .then(function () {
    // sempre executada, independente da resposta
  });

