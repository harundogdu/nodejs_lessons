/*
Job:

Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Yarıçapı giriniz... ', function (r) {
    const totoalArea = Math.PI * Math.pow(r, 2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${totoalArea}`);
    process.exit(0);
});