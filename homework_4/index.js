/*
Job:
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
*/

const fs = require("fs");

//create Method

fs.writeFile(
    "employees.json",
    '{"name": "Employee 1 Name", "salary": 2000}',
    "utf-8",
    (err) => {
        if (err) console.log(err);
    }
);

//read method

fs.readFile("employees.json", "utf-8", (err, data) => {
    //with callback
    if (err) console.log(err);
    console.log(data);
    console.log("Veri okundu");
});

//update method

fs.appendFile(
    "employees.json",
    '\n ,{"name": "Employee 5 Name", "salary": 5545}',
    "utf8",
    (err) => {
        if (err) console.log(err);
    }
);

//delete File

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
});