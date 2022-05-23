
// use async anywhere as rust runtime is asynchronous 
async function getCovidStats() {
  try {
    // web api support of fetch
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    const data = await response.json();
    console.table(data);
  } catch (err) {
    console.error(err);
  }
}



getCovidStats();
