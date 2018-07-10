var db = require("../config/databaseConfig");

var categoriesDB = {
  getAllCategories: function(callback) {  
    return db.query("select * from categories", callback);  
  },  
  getCategoryById: function(categoryid, callback) {  
      return db.query("select * from categories where categoryid=?", [categoryid], callback);  
  },  
  addCategory: function(Category, callback) {  
      return db.query("insert into categories (name) values(?)", [Category.name], callback);  
  },  
  deleteCategory: function(categoryid, callback) {  
      return db.query("delete from categories where categoryid=?", [categoryid], callback);  
  },  
  updateCategory: function(Category, callback) {  
      return db.query("update categories set name=? where categoryid=?", [Category.name, Category.categoryid], callback);  
  }  
};
module.exports = categoriesDB;