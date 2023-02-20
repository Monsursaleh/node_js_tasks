"use strict";
const fs = require("fs");
const http = require("http");

const port = 9000;
const host = "localhost"; //'127.0.0.1';
const url = require("url");

// creating a server
const test_server = http.createServer((request, response) => {
  // const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
  // console.log(data);
  // let objData = JSON.parse(data);
  // console.log(objData);
  console.log(request.url);
  const pathName = request.url;

  // Overview page
  if (pathName === "/" || pathName === "/overview") {
    response.end("overview rout");
  } else if (pathName === "/product") {
    response.end("product rout");
  } else if (pathName === "/api") {
    // fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
    let productData = JSON.parse(data);
    response.writeHead(200, {
      "Content-type": "application/json",
    });
    response.end(data);
    // });
  } else {
    response.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    response.end("<h1>Page not found!</h1>");
  }
});
// listen or start the server
test_server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is serving`)
);

// let fs = require("fs");
// reading the file
//. is current directory and / is teh folder then  file
// let textIn = fs.readFileSync("./txt/input.txt", "utf-8"); // utf define the character otwise binaray character shwos
// console.log(textIn);
// creating a file that contains my TextIn text and mergin more text

// let outText = `This is Monsur Saleh, i know abocaddo is a good food for health: ${textIn}\nCreated on ${Date.now()}`;

// now my text is ready not need to trasport to new file in same direcotory
// fs.writeFileSync("./txt/output.txt", outText); // two arguments filepath and waht text

// let x = "1";
// fs.writeFileSync("./txt/output.txt", x); // two arguments filepath and second arumetn has to be string becasue we writing to txt fiel '
// if we write abve code then  it will overwrite the previus output txt file content
