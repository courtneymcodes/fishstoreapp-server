const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    orderDate: {
        type: String
    },
    orderTotal: {
        type: String
    }
}
)

const OrderModel = mongoose.model("order", OrderSchema)
module.exports = OrderModel





