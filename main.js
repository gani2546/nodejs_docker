// Import the http module to create a server
const http = require('http');

// Define the port number
const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response message
  res.end('Hello, this is a simple Node.js server!');

  // Log a message to the console when a request is received
  console.log('A request was made to the server!');
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
