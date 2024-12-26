const mongoose = require("mongoose");
const product_sch = mongoose.Schema({
    name: String,
    price: String,
    category: String,
    image: String
})
const product = mongoose.model("product", product_sch)
exports.get_home_model = () => {
    return new Promise((acc, rej) => {
        mongoose.connect("mongodb://localhost:27017/omar").then(() => {
            console.log("db connected")
            return product.find({})
        }).then(products => {
            mongoose.disconnect()
            acc(products)

        }).catch((err) => rej(err))
    })
}