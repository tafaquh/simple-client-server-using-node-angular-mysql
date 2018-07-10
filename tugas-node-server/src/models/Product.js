var db = require("../config/databaseConfig");

var productDB = {
  getAllProducts: function(callback) {  
    return db.query("select * from products", callback);  
  },  
  getProductById: function(productid, callback) {  
      return db.query("select * from products where productid=?", [productid], callback);  
  },  
  addProduct: function(Product, callback) {  
      return db.query("insert into products (name,stock,price,photo,categoryid) values(?,?,?,?,?)", [Product.name, Product.stock, Product.price, Product.photo, Product.categoryid], callback);  
  },  
  deleteProduct: function(productid, callback) {  
      return db.query("delete from products where productid=?", [productid], callback);  
  },  
  updateProduct: function(Product, callback) {  
      return db.query("update products set name=?,stock=?,price=?,photo=? where productid=?", [Product.name, Product.stock, Product.price, Product.photo, Product.productid], callback);  
  }  
};
module.exports = productDB;