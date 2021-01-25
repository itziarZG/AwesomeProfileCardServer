const path = require("path");
const cors = require("cors");
const express = require("express");
const validation = require("./dataValidation/validation");
const dataModule = require("./data/data");
const baseURL = require("./enviroment/enviroment");

//create server
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//config ejs for template engine
app.set("view engine", "ejs");

//set express middleware
app.use(express.json());
app.use(cors());

// create app server at PORT
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

// STATIC SERVER: listen files in public folder
const staticServerPath = "./public"; // relative to the root of the project
app.use(express.static(staticServerPath));

//endpoints
app.post("/card", (req, res) => {
  //data card in en body
  let response = {};
  //data ok?
  const dataok = validation.validation(req.body);
  // console.log(dataok);

  if (dataok.dataok) {
    const cardId = dataModule.write(req.body);
    response = {
      resp: "card created",
      success: true,
      cardURL: `${baseURL.baseURL}/card/${cardId}`,
    };
  } else {
    response = {
      success: false,
      error: dataok.message,
    };
  }
  console.log(response);
  res.status(200).json(response);
});
app.get("/card/:cardId", (req, res) => {
  const data = dataModule.data.find((item) => {
    if (item.id == req.params.cardId) return item;
  });

  if (data) res.render("TemplateCard", data.datacard);
  else res.render("page-not-found");
});

app.get("*", (req, res) => {
  const response = {
    resp: "test-ok",
    message: "No existe endpoint",
  };
  res.status(400).json(response);
});
