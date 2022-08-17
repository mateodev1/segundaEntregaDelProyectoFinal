import { Router } from 'express'

const cartRoute = Router()

import controller from "./../controllers/cart.js";
const {
    allCart,
    createCart,
    deleteCart,
    getAllProductsCart,
    addProductsCart,
    deleteProductCart
} = controller


cartRoute.route('/')
    .get(allCart)
    .post(createCart)

cartRoute.route('/:id')
    .delete(deleteCart)

cartRoute.route('/:id/productos')
    .get(getAllProductsCart)
    .post(addProductsCart)

cartRoute.route('/:id/productos/:idProduct')
    .delete(deleteProductCart)


export default cartRoute