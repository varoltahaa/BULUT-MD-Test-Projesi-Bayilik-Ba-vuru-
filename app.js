
// Express modülü projeye eklenir ve uygulama oluşturulur.
const express = require("express");
const app = express();

app.use(express.json());
// path modülü projeye eklenir. Gerekli yerlerde modül yollarını import edebilmek için
const path = require("path");

// Node.js in globol methodu "view engine" kullanılarak uygulama motoru olarak pug belirlenir
app.set('view engine','pug');

// database.js dosyasından veritabanı bağlantısı alınır
const connection = require("./utility/database");

// views klasörü projenin statik dosyaları için kullanılır.
app.use(express.static(path.join(__dirname,"./","views")));

// body-parser modülü projeye eklenir. Gövdedeki (body,window) parçaları ayrıştırmak ve ayrıştırılmış verileri kullanılabilir hale getirmek için kullanılır.
const bodyParser = require("body-parser");

// body-parser modülü ile gelen veriler işlenir. body-parser için yukarda bahsettiğim özelliğ urlencod yöntemi ile gerçekleşir.
app.use(bodyParser.urlencoded({extended:false}));

//projenin ilk başlayacağı sayfanın router yolu eklenir ve kullanılır.
const formPage = require("./routers/form_Page");
app.use(formPage);




//uygulamanın 3000. portta başlayacağını belirttik.
app.listen(3000, ()=>{
    console.log("Listening Port 3000");
});