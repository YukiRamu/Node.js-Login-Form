/* import Node modules */
const http = require("http");
const port = 3000;
const fs = require("fs");

const fileType = {
  ".html": "text/html",
  '.css': "text/css",
  '.js': "text/javascript",
  '.jpg': "image/jpg"
};

const getFileType = (url) => {
  for (let key in fileType) {
    if (url.endsWith(key)) {
      return fileType[key];
    };
  }
  return "text/html"; //for error.html
};

const showData = (res, reqURL, data) => {
  res.writeHead(200, { "Content-Type": getFileType(reqURL) });
  res.write(data);
  res.end();
};

/* create a server */
/* html --> req.url is "/login.html" 
/* css, js, jpg --> req.url is "/public/stylesheets/login.css"*/

const server = http.createServer((req, res) => {

  let requestURL = (req.url.endsWith('/') ? `${req.url}index.html` : req.url);

  switch (requestURL.endsWith(".html")) {
    //read html files
    case true:
      fs.readFile(`./views${requestURL}`, (error, data) => {
        if (error) {
          //404 page
          fs.readFile("./views/error.html", (error, data) => {
            showData(res, requestURL, data);
          });
        } else {
          showData(res, requestURL, data);
        }
      });
      break;
    //read other files (css, js, jpg)
    case false:
      fs.readFile(`.${requestURL}`, (error, data) => {
        if (error) {
          //404 page
          fs.readFile("./views/error.html", (error, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          });
        } else {
          showData(res, requestURL, data);
        }
      });
      break;
    //error.html
    default:
      fs.readFile("./views/error.html", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});