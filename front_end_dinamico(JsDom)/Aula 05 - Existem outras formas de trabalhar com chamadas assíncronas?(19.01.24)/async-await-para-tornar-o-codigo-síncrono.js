// Uso de async/await
async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "Dados recuperados com sucesso!";
        resolve(data);
      }, 2000);
    });
  }
  
  async function processData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const processedData = data.toUpperCase();
        resolve(processedData);
      }, 2000);
    });
  }
  
  // Uso de async/await para tornar o código assíncrono sem callback hell
  async function fetchDataAndProcess() {
    try {
      const data = await fetchData();
      const result = await processData(data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchDataAndProcess();
  