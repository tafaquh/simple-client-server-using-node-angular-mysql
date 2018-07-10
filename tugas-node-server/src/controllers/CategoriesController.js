var Category = require('../models/Categories')

module.exports = {
  getCategory (req, res, next) {  
    if (req.params.categoryid) {  
      Category.getCategoryById(req.params.categoryid, function(err, rows) {  
        if (err) {  
          res.status(500).send({
            error: 'Error!',
            message: err
          })    
        } else {  
          res.json(rows);  
        }  
      });  
    } else {  
      Category.getAllCategories(function(err, rows) {  
        if (err) {  
          res.status(500).send({
            error: 'Error!',
            message: err
          })    
        } else {  
          res.json(rows);  
        }  
      });  
    }  
  },

  postCategory (req, res, next) {  
    Category.addCategory(req.body, function(err, count) {  
      if (err) {  
        res.status(500).send({
          error: 'Error!',
          message: err
        })  
      } else {  
        res.json({
          status: 'Success adding Category!',
          data: req.body
        });  
      }  
    });  
  },

  deleteCategory (req, res, next) {  
    Category.deleteCategory(req.params.categoryid, function(err, count) {  
      if (err) {  
        res.status(500).send({
          error: 'Error!',
          message: err
        })    
      } else {  
        res.json({
          status: 'Success deleting Category!'
        });   
      }  
    });  
  },

  updateCategory (req, res, next) {  
    Category.updateCategory(req.body, function(err, rows) {  
      if (err) {  
        res.status(500).send({
          error: 'Error!',
          message: err
        })    
      } else {  
        res.json({
          status: 'Success updating Category!'
        });  
      }  
    });  
  }
}