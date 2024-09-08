const router = require('express').Router();
const productControl = require('../controllers/productControl')

router.route('/products')
.get(productControl.getProducts)
.post(productControl.createProducts)



router.route('/products/:id')
.delete(productControl.deleteProduct)
.put(productControl.updateProduct)


module.exports = router