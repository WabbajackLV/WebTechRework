//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const { Double } = require("mongodb");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

const productSchema = {
    title: String,
    price: Double
}

const Product = mongoose.model("Product", productSchema);

app.route("/products")
.get(function(req, res){
    Product.find(function(err, foundProducts){
        if(!err){
            res.send(foundProducts);
        }else{
            res.send(err);
        }
    });
})
.post(function(req, res){
    const newProduct = new Product({
        title: req.body.title,
        price: req.body.price
    });
})
.delete(function(req, res){
    Product.deleteMany(function(err){
        if(!err){
            res.send("Successfully deleted all products");
        }else{
            res.send(err);
        }
    });
});

app.route("/products/:productTitle")
.get(function(req, res){
    Product.findOne({title: req.params.productTitle}, function(err, foundProduct){
        if(foundProduct){
            res.send(foundProduct);
        }else{
            res.send("No products matching that title were found");
        }
    });
})
.put(function(req, res){
    Product.update(
        {title: req.params.productTitle},
        {title: req.body.title, price: req.body.price},
        {overwrite: true},
        function(err){
            if(!err){
                res.send("Successfully updated article");
            }
        }
    );
})
.delete(function(req, res){
    Product.deleteOne(
        {title: req.params.productTitle},
        function(err){
            if(!err){
                res.send("Successfully deleted specified product";
            }else{
                res.send(err);
            }
        }
    );
});







app.listen(3000, function(){
    console.log("Server started on port 3000");
});