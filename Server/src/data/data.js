const data = require("./index");

const write = (datacard) => {
  console.log("data card en write", datacard);
  //fix palette decalage
   datacard.palette = (parseInt(datacard.palette) + 1).toString();
   const randomId = "card-" + Math.floor(Math.random() * 999999);

  //with database
 
  const stmt = data.db.prepare('INSERT INTO cards (ID,palette,name,job,email,phone,photo,linkedin,github) VALUES (?,?,?,?,?,?,?,?,?)');
  const info = stmt.run(randomId,datacard.palette,datacard.name,datacard.job,datacard.email,datacard.phone,datacard.photo,datacard.linkedin,datacard.github); 
  // console.log(info.changes);
   return randomId;
};

const readDatabase=(id)=>{
  const stmt = data.db.prepare('SELECT * FROM cards WHERE id=?');
  const cards=stmt.all(id);
  //only the object card because retunrs an array of one objectvas a 
  return(cards[0]);
}

module.exports = {
  write: write,
  read:readDatabase,
  data: data,
};
