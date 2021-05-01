const http = require('http');

http
  .createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello ');
    res.end('world');
  })
  .listen(3000, () => {
    console.log('Server start');
  });

/**
 * createServer() - слушает события которые приходят на сервер
 * req - помогает обрабатывать все, что приходит от браузера
 * res - помогает отвечать браузеру
 * writeHeade() - метод устанавливает заголовки
 */
