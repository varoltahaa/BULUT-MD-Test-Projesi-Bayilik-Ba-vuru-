// veritabanına bağlanmak için ../utility/database yoluyla veritabanı modülünü çağırır.
const connection = require("../utility/database");

// "Form" sınıfını oluşturur ve "module.exports" komutu ile bu sınıfın dış dünyaya açılmasını sağlar.
module.exports = class Form {

    //Bu, Form sınıfının yapıcı metodudur ve sınıfın özelliklerini tanımlar. Bu özellikler bir formun sahip olabileceği alanlardır ve bu alanlar saveForm() yöntemi tarafından veritabanına kaydedilir.

    constructor (firstName,lastName,tc,address,address2,province,town,neighborhood,phoneNumber,eMail,birthDay,occupation,amount,choosing,added){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tc = tc;
        this.address = address;
        this.address2 = address2;
        this.province = province;
        this.town = town;
        this.neighborhood = neighborhood;
        this.phoneNumber = phoneNumber;
        this.eMail =eMail;
        this.birthDay = birthDay;
        this.occupation = occupation;
        this.amount = amount;
        this.choosing = choosing;
        this.added = added;
    }

//Bu yöntem, Form nesnesini veritabanına kaydetmek için kullanılır. execute() yöntemi SQL sorgusunu ve form özelliklerini alır ve bunları veritabanına kaydeder.
    saveForm() {
        return connection.execute("insert into form_table (firstName, lastName, tc, address, address2, province, town, neighborhood, phoneNumber, eMail, birthDay, occupation, amount, choosing, added) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [this.firstName,this.lastName,this.tc,this.address,this.address2,this.province,this.town,this.neighborhood,this.phoneNumber,this.eMail,this.birthDay,this.occupation,this.amount,this.choosing, this.added]);
    }
//Bu yöntem, Form nesnelerinin tümünü veritabanından getirmek için kullanılır. execute() yöntemi, tüm form verilerini içeren bir SQL sorgusunu alır ve bunları geri döndürür.
    static getAll() {
        return connection.execute("select * from form_table");
    }
}
