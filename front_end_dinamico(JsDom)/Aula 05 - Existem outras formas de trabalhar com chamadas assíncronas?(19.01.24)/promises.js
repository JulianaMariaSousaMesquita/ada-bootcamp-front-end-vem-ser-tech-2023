// Exemplo de chamada assíncrona usando Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Dados recuperados com sucesso!";
        resolve(data);
      }, 2000);
    });
  }
  
  // Uso da Promise
  fetchData()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  