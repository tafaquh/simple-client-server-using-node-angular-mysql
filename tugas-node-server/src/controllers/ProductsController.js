var Product = require('../models/Product');  

module.exports = {
  getProduct (req, res, next) {  
    if (req.params.productid) {  
      Product.getProductById(req.params.productid, function(err, rows) {  
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
      Product.getAllProducts(function(err, rows) {  
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

  postProduct (req, res, next) {  
    Product.addProduct(req.body, function(err, count) {  
      if (err) {  
        res.status(500).send({
          error: 'Error!',
          message: err
        })  
      } else {  
        //console.log('header req: ',req.headers)
        //console.log('body req: ', req.body)
        res.json({
          status: 'Success adding product!',
          data: req.body
        });  
      }  
    });  
  },

  deleteProduct (req, res, next) {  
    Product.deleteProduct(req.params.productid, function(err, count) {  
      if (err) {  
        res.status(500).send({
          error: 'Error!',
          message: err
        })    
      } else {  
        res.json({
          status: 'Success deleting product!'
        });   
      }  
    });  
  },

  updateProduct (req, res, next) {  
    Product.updateProduct(req.body, function(err, rows) {  
      if (err) {  
        res.status(500).send({
          error: 'Error!',
          message: err
        })    
      } else {  
        res.json({
          status: 'Success updating product!',
          data: req.body
        });  
      }  
    });  
  }
}  