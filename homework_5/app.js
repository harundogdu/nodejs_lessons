/*
Job:
Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
*/

const http = require('http');
const server = http.createServer((req, res) => {
    /* Routes */
    const url = req.url;

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>INDEX Page</h2>");
    } else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>About Page</h2>");
    } else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html", });
        res.write("<h2>Contact Page</h2>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2>404 Page Not Found </h2>");
    }

    res.end();
});

const port = 5000;
server.listen((port), () => {
    console.log(`Server is running on port ${port}`);
})
