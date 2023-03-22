// "express" modülünü projede kullanabilmek için require fonksiyonuyla projeye dahil edilir.
const express = require("express");

//"router" adında bir nesne oluşturulur. Bu nesne "express" modülünden gelen Router() metodu ile oluşturulur.
// Bu nesne yönlendirme işlemlerini yapmak için kullanılacak olan ana nesnedir
const router = express.Router();

//formController adında bir değişken oluşturulur ve bu değişken,
// ../controllers/form_page dosyasındaki fonksiyonları barındıran nesne tarafından doldurulur.
const formController = require("../controllers/form_page");

// "router" nesnesi kullanılarak GET istekleri için "/" rotası belirlenir ve bu rotaya gelen isteklerde "formController.getForm" fonksiyonu çağrılır.
// Bu rotaya gelen isteklerde form sayfası gösterilir.
router.get("/",formController.getForm);

// "router" nesnesi kullanılarak POST istekleri için "/" rotası belirlenir ve bu rotaya gelen isteklerde "formController.postForm" fonksiyonu çağrılır.
// Bu rotaya gelen isteklerde kullanıcı form verileri gönderir ve bu verilerin kaydedilmesi işlemi gerçekleştirilir.
router.post("/",formController.postForm)


//   nesnesi kullanılarak GET istekleri için "/" list rotası belirlenir ve bu rotaya gelen isteklerde "formController.getList" fonksiyonu çağrılır.
// Bu rotaya gelen isteklerde tüm kaydedilmiş form verileri görüntülenir.
router.get("/list",formController.getList)


// "router" nesnesi, dışarı aktarılır ve diğer modüller tarafından kullanılabilir hale getirilir.
// Bu, "router" nesnesinin uygulamanın diğer dosyalarında kullanılabilmesine olanak tanır.
module.exports = router;

