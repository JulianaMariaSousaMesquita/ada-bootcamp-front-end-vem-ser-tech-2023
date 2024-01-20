// Exemplo de Callback Hell
function fetchData(callback) {
    setTimeout(() => {
      const data = "Dados recuperados com sucesso!";
      callback(data);
    }, 2000);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      const processedData = data.toUpperCase();
      callback(processedData);
    }, 2000);
  }
  
  fetchData((data) => {
    processData(data, (result) => {
      console.log(result);
    });
  });  