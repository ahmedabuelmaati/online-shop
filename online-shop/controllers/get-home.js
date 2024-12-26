const get_home_model = require("../models/get-home.model")
exports.get_home = (req, res, next) => {
    get_home_model.get_home_model().then(products => {
        res.render("home", {
            products: products
        })
    })
}