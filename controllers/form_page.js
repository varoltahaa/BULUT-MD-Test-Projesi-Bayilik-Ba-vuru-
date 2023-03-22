//"../models/form" dosya yolu üzerinden "Form" adlı modülü alır ve Form değişkenine atar.
const Form = require("../models/form");
const { body, validationResult } = require('express-validator');

// "getForm" adlı bir yönlendiricinin tanımını oluşturup. Bu yönlendirici, "form" adlı Pug şablonunu render eder ve HTTP GET isteklerine cevap verir.
module.exports.getForm = (req,res,next)=>{
    res.render("form",{title:"Dealer Pre-Application Form"});
}
// "postForm" adlı bir yönlendiricinin tanımını oluşturur. Bu yönlendirici, bir HTTP POST isteği alır ve kullanıcının formda girdiği verileri kullanarak bir Form nesnesi oluşturur ve veritabanına kaydeder.
// Daha sonra "res.redirect" methodu ile "list" sayfasına yönlendirir
module.exports.postForm = (req,res,next)=>{
    const form =new Form(req.body.firstName,req.body.lastName,req.body.tc,req.body.address,req.body.address2,req.body.province,req.body.town,req.body.neighborhood,req.body.phoneNumber,req.body.eMail,req.body.birthDay,req.body.occupation,req.body.amount,req.body.choosing,req.body.added);
    form.saveForm().then((result)=>{
        res.redirect("list");
    }).catch((err)=>{
        console.log(err);
    });
}

//"getList" adlı bir yönlendiricinin tanımını oluşturur. Bu yönlendirici, tüm Form nesnelerini getirir ve "list" sayfasını render eder.
module.exports.getList = (req,res,next)=>{
    Form.getAll().then((result)=>{
        //Burada [0] koymamızın nedeni mysql veritabanından 2 tane dizi geliyor 0. indexi yani kendi verilerimizi almak için yaptık.
        res.render("list",{title:"List",form:result[0]});
    }).catch((err)=>{
        console.log(err)
    });
}