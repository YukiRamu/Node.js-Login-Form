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
  return "text/html"; //error.html
};

const showData = (res, reqURL, data) => {
  res.writeHead(200, { "Content-Type": getFileType(reqURL) });
  res.write(data);
  res.end();
};

//trying
const getFilePath = (requestURL) => {
  if (requestURL.endsWith(".html")) {
    return `./views${requestURL}`;
  } else {
    return requestURL;
  }
};

/* create a server */
const server = http.createServer((req, res) => {
  let requestURL = (req.url.endsWith('/') ? `${req.url}index.html` : req.url);
  console.log("requestURL is ", requestURL, req.url);
  switch (requestURL) {
    /********* htmls *********/
    case "/index.html":
      //read index.html
      fs.readFile("./views/index.html", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      //read htmls trying
      // fs.readFile(getFilePath(requestURL), (err, data) => {
      //   if (!err) {
      //     res.writeHead(200, { 'Content-Type': getFileType(requestURL) });
      //     res.write(data);
      //     res.end();
      //   } else {
      //     res.statusCode = 500;
      //     res.end();
      //   }
      // });
      break;

    case "/login.html":
      //login.html
      fs.readFile("./views/login.html", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;

    case "/register.html":
      //register.html
      fs.readFile("./views/register.html", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;

    /********* css *********/
    case "/public/stylesheets/index.css":
      //read index.css
      fs.readFile("./public/stylesheets/index.css", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;

    case "/public/stylesheets/login.css":
      //read login.css
      fs.readFile("./public/stylesheets/login.css", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;

    case "/public/stylesheets/register.css":
      //read register.css
      fs.readFile("./public/stylesheets/register.css", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;

    case "/public/stylesheets/error.css":
      //read error.css
      fs.readFile("./public/stylesheets/error.css", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;

    /********* javascript *********/
    case "/public/javascripts/login.js":
      //read login.js
      fs.readFile("./public/javascripts/login.js", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;

    case "/public/javascripts/register.js":
      //read register.js
      fs.readFile("./public/javascripts/register.js", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;

    case "/public/javascripts/error.js":
      //read error.js
      fs.readFile("./public/javascripts/error.js", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;
    /********* images *********/
    case "/public/images/bg.jpg":
      //read bg image
      fs.readFile("./public/images/bg.jpg", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;

    case "/public/images/bg2.jpg":
      //read bg image
      fs.readFile("./public/images/bg2.jpg", (error, data) => {
        if (error) {
          throw error;
        } else {
          showData(res, requestURL, data);
        }
      });
      break;

    default:
      //error.html
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