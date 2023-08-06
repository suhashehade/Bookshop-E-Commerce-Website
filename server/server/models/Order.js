const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const OrderSchema = new Schema({
    username: String,
    userEmail: {
        type:String,
        validate:{
              validator: validator.isEmail,
              message: '{VALUE} is not a valid email',
              isAsync: false
            }
        },
    userPhone: String,
    userAddress: String,
    cart: [],
});

const Order = mongoose.model('Order', OrderSchema)
module.exports = Order;