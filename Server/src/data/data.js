const data = [];

const write = (datacard) => {
  // console.log("data card en write", datacard);
  //fix palette decalage
  datacard.palette = (parseInt(datacard.palette) + 1).toString();
  const randomId = "card-" + Math.floor(Math.random() * 999999);
  let error = "";
  const obj = {
    id: randomId,
    datacard: datacard,
  };
  console.log(datacard.palette);
  data.push(obj);

  return randomId;
};

module.exports = {
  write: write,
  data: data,
};
