const http = require('http');
const express = require('express');

const PORT = 5000;
const app = express();
const server = http.createServer(app);

app.use(
  express.json(),
  express.urlencoded({ extended: false })
  );

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    data: { response: 'OK' },
    message: 'This server is working properly.',
    code: 200
  });
});

app.get('*', (req, res) => {
  return res.status(404).json({
    success: false,
    data: {},
    message: 'Cannot get unspecified endpoint.',
    code: 404
  });
});

server.listen(PORT, () => console.log(`Connected to port ${PORT}`));
server.on('error', () => process.exit(1));

module.exports = app;
