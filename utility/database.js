
// "mysql2" modülü projeye dahil edilir.
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"form_app",
    password:"13579taha13579"
})


//Oluşturulan bağlantı, promise yöntemi kullanılarak promise nesnesine dönüştürülerek dışarı aktarılır.
//Asenkron yapılarda kullanılması tercih edilen "promise" then() ve catch() metodları ile çalışırı hataları daha kolay yakalamanı sağlar.
module.exports = connection.promise();

