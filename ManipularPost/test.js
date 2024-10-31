const express = require('express');
const multer = require('multer');
const bodyParser = require("body-parser")
const app = express();

// Configuração do Multer
const upload = multer();  // Usando armazenamento em memória para processar o form-data

app.post('/novaDenuncia', upload.any(), (req, res) => {
  // req.body conterá os campos de texto do formulário
  console.log('Campos de Formulário:', req.body);
  
  // req.files conterá os arquivos enviados
  console.log('Arquivos:', req.files);
  
  res.send('Dados e arquivos recebidos com sucesso!');
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
