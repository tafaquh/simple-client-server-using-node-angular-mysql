const UsersController = require('./controllers/UsersController')
const ProductsController = require('./controllers/ProductsController')

module.exports = (app) => {
  // User routes
  app.get('/api/user/:userid', UsersController.getUser)

  //Products routes
  app.get('/api/products/', ProductsController.getProduct)
  app.get('/api/products/:productid', ProductsController.getProduct)
  app.post('/api/products/', ProductsController.postProduct)
  app.delete('/api/products/:productid', ProductsController.deleteProduct)
  app.put('/api/products/', ProductsController.updateProduct)
}