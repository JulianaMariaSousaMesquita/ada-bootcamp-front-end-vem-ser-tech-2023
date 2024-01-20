function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Dados recuperados com sucesso!";
        resolve(data);
      }, 2000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processedData = data.toUpperCase();
        resolve(processedData);
      }, 2000);
    });
  }
  
  // Uso de Promise para evitar Callback Hell
  fetchData()
    .then((data) => processData(data))
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });  