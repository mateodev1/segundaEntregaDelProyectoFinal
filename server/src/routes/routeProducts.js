import { Router } from 'express'
const productRoute = Router()

import controller from "./../controllers/products.js";
const {
    getAll,
    addProducts,
    idProducts,
    updateProducto,
    deleteProduct
} = controller



productRoute.route('/')
    .post(addProducts)
    .get(getAll)

productRoute.route('/:id')
    .get(idProducts)
    .put(updateProducto)
    .delete(deleteProduct)

export default productRoute