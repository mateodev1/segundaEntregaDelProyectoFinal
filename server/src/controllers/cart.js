import DAO from './../DAOs/index.js'

const allCart = async(req,res)=>{
    const response = await DAO.CartDAO.getAll()
    res.json( response )
}
const createCart = async(req,res)=>{
    const newCart = {
        timestamp:Date.now(),
        products:[]
    }
    await DAO.CartDAO.addObject(newCart)
}

const deleteCart = async(req,res)=>{
    const id = req.params.id
    await DAO.CartDAO.deleteObject(id)
}
const getAllProductsCart = async(req,res)=>{
    const id = req.params.id
    const response = await DAO.CartDAO.getId(id)
    res.send(response.products)
}

const addProductsCart = async(req,res)=>{
    const idCart = req.params.id
    const product = req.body.product
    const cart = await DAO.CartDAO.getId(idCart)
    cart.products.push(product)
    await DAO.CartDAO.updateObject(cart)
}

const deleteProductCart = async(req,res)=>{
    const { idProduct, id:idCart } = req.params
    const cart = await DAO.CartDAO.getId(idCart)
    const products = cart.products.filter( item => item._id !== idProduct)

    await DAO.CartDAO.updateOne(idCart,{products})
}

export default {
    allCart,
    createCart,
    deleteCart,
    getAllProductsCart,
    addProductsCart,
    deleteProductCart
}