const express = require('express');

const app = express(); 

app.get('/ping', handlePingRequest);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); 

function handlePingRequest(_req, res) {
  res.json({ "message": "pong" });
}