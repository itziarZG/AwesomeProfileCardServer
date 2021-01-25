const validation = (data) => {
  let dataok = true;
  let message = "";
  for (atrib in data) {
    if (data[atrib] === "") {
      dataok = false;
      message = message + `Data ${atrib} is empty`;
    }
  }
  //doesn't make sense..
  // if (data.palette < 1 || data.palette > 2) {
  //   dataok = false;
  //   message = message + "Invalid palette";
  // }
  return { dataok: dataok, message: message };
};

module.exports = {
  validation: validation,
};
