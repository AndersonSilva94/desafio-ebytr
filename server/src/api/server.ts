const appListen = require('./app');

const PORT = 3000;

appListen.listen(PORT, () => {
  console.log(`conectado na porta ${PORT}`);
});
