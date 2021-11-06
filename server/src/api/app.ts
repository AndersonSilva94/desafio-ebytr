const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// eslint-disable-next-line no-unused-vars
app.use((err, _request, response, _next) => {
  if (err.status) return response.status(err.status).json({ message: err.message });
  return response.status(500).json({ message: err.message });
});

module.exports = app;
