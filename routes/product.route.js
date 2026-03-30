const express = require('express')
const { upload } = require('../middleware/upload')

const router = express.Router()

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controller/product.controller')

router.get('/', getProducts)
router.get('/:id', getProduct)
// router.post('/', createProduct)
router.put(
    '/:id',
    upload.fields([
        { name: 'desktopImage', maxCount: 1 },
        { name: 'mobileImage', maxCount: 1 },
        { name: 'landingImage', maxCount: 1 },
        { name: 'screenshot', maxCount: 1 },
    ]),
    updateProduct
)

router.delete('/:id', deleteProduct)

router.post(
    '/create',
    upload.fields([
        { name: 'desktopImage', maxCount: 1 },
        { name: 'mobileImage', maxCount: 1 },
        { name: 'landingImage', maxCount: 1 },
        { name: 'screenshot', maxCount: 1 },
    ]),
    createProduct
)

module.exports = router