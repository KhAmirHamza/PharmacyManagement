const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = {useNewUrlParser: true, useUnifiedTopology: true };
const medicineDbConnectUrl = "mongodb+srv://pharmacy:pharmacy@pharmacymanagementclust.89snppp.mongodb.net/pharmacy?retryWrites=true&w=majority"
var medicineDbConnection = mongoose.createConnection(medicineDbConnectUrl, config, function(error, result){
    if (error) {
        console.log(error)
    }else{
        console.log("Connected with Medicine Db!")
    }
});




const medicineSchema = new Schema({
    _id:{type: String, required: true},
    name: {type: String, required: true},
    ml: {type: String, required: true},
    generic_name: {type: String, required: true},
    price_with_details: {type: String, required: true},
    strip: {type: Number, required: true},
    box_size: {type: Number, required: true},
    box_size2: {type: String, required: true},
    company_name: {type: String, required: true},
    minimum_sale: {type: Number, required: true},
    price: {type: Number, required: true},
    box_price1: {type: Number, required: true},
    box_price2: {type: Number, required: true},
    vat: {type: Number, required: true},
    trade_value: {type: Number, required: true},
    trade_price: {type: Number, required: true},
    price: {type: Number, required: true},
    price: {type: Number, required: true},
    price: {type: Number, required: true}
},
{timestamps: true});

const Medicine = medicineDbConnection.model('Medicine', medicineSchema);
module.exports = Medicine;