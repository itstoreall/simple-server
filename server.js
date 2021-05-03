const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const TypeMime = {
  '.html': 'text/html',
  '.htm': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.jpe': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/vnd.microsoft.icon',
};

http
  .createServer(async (req, res) => {
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);
    let filename = pathname;

    switch (pathname) {
      case '/':
        filename = 'index.html';
        break;
      case '/contact':
        filename = 'contact.html';
        break;
      case '/blog':
        filename = 'blog.html';
        break;
      default:
        break;
    }

    const content = await fs.readFile(path.join(__dirname, filename));

    res.writeHead(200, { 'Content-Type': TypeMime[path.extname(filename)] });
    res.write(content);
    res.end();
  })
  .listen(3000, () => {
    console.log('Server start');
  });

/**
 * createServer() - слушает события которые приходят на сервер
 * req - помогает обрабатывать все, что приходит от браузера
 * res - помогает отвечать браузеру
 * writeHeade() - метод устанавливает заголовки
 * content - читаем файл index.html
 */
