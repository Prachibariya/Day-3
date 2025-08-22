// server.js
const http = require('http');

// Sample static data (like a fake API)
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/api/users" && req.method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify(users));
  } else if (req.url.startsWith("/api/user/") && req.method === "GET") {
    const id = parseInt(req.url.split("/")[3]);
    const user = users.find(u => u.id === id);

    if (user) {
      res.writeHead(200);
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: "User not found" }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
