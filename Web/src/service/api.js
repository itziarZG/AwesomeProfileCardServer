// const ENDPOINT = "https://profileawesome.herokuapp.com/card";
const ENDPOINT = "http://localhost:3000/card";

const getDataFromApi = (data) => {
  //
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => console.error("Error:", error));
};

export default getDataFromApi;
