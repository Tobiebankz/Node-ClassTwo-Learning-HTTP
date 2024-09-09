const fs = require("fs");
const http = require("http");
// console.log(http)
// const server = http.createServer((request, response)=>{
// response.end("I am here")
// })
// const server = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/html" });
//   response.end("<div style='height:100vh; display:flex; justify-content:center; align-items:center;'>Hello World</div>");
// });

// const server = http.createServer((request, response) => {
//   fs.readFile("index.html", "utf8", (err, data) => {
//     if (err) {
//       response.writeHead(404, { "Content-Type": "text/html" });
//       response.end(
//         "<div style='height:100vh; display:flex; justify-content:center; align-items:center;'><h1>Page Not Found !</h1></div>"
//       );

//       return;
//     }

//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end(data);
//   });
//   //   response.end("<div style='height:100vh; display:flex; justify-content:center; align-items:center;'>Hello World</div>");
// });

// const server = http.createServer((request, response) => {
//   const route = request.url;
//   if (route === "/") {
//     fs.readFile("index.html", "utf8", (err, data) => {
//       if (err) {
//         response.writeHead(404, { "Content-Type": "text/html" });
//         response.end(
//           "<div style='height:100vh; display:flex; justify-content:center; align-items:center;'><h1>Page Not Found !</h1></div>"
//         );
//         return;
//       }
//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.end(data);
//     });
//   } else if (route === "/about") {
//     fs.readFile("about.html", "utf8", (err, data) => {
//       if (err) {
//         response.writeHead(404, { "Content-Type": "text/html" });
//         response.end(
//           "<div style='height:100vh; display:flex; justify-content:center; align-items:center;'><h1>Page Not Found !</h1></div>"
//         );
//         return;
//       }
//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.end(data);
//     });
//   } else {
//     response.writeHead(404, { "Content-Type": "text/html" });
//     response.end(
//       "<div style='height:100vh; display:flex; justify-content:center; align-items:center;'><h1>Page Not Found !</h1></div>"
//     );
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });


const server = http.createServer((request, response) => {
  const route = request.url;
  if (route === "/") {
    fs.readFile("index.html", "utf8", (err, data) => {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end(
          "<div style='height:100vh; display:flex; justify-content:center; align-items:center;'><h1 style= font-weight=bolder>404 ERROR</h1> <br> <p>Page not Found</p></div>"
        );
        return;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  } else if (route === "/about") {
    fs.readFile("about.html", "utf8", (err, data) => {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end(
          "<div style='height:100vh; display:flex; justify-content:center; align-items:center;'><h1 style= font-weight=bolder>404 ERROR</h1> <br> <p>Page not Found</p></div>"
        );
        return;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  } else if (route === "/service") {
    fs.readFile("service.html", "utf8", (err, data) => {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end(
          "<div style='height:100vh; display:flex; justify-content:center; align-items:center;'><h1 style= font-weight=bolder>404 ERROR</h1> <br> <p>Page not Found</p></div>"
        );
        return;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  } else if (route === "/contact") {
    fs.readFile("contact.html", "utf8", (err, data) => {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end(
          "<div style='height:100vh; display:flex; justify-content:center; align-items:center;'><h1 style= font-weight=bolder>404 ERROR</h1> <br> <p>Page not Found</p></div>"
        );
        return;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(
      "<div style='height:100vh; display:flex; justify-content:center; align-items:center;'><h1>Page Not Found !</h1></div>"
    );
  }
});

server.listen(2000, () => {
  console.log("Server is listening on port 2000");
});
