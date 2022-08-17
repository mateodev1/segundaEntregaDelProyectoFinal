import DAO from './../DAOs/index.js'

const getAll = async(req,res)=>{
    const response = await DAO.ProductDAO.getAll()
    res.json( response )
}
const addProducts = async(req,res)=>{
    const newProduct = {
        timestamp: Date.now(),
        ...req.body}
    await DAO.ProductDAO.addObject(newProduct)
}
const idProducts = async(req,res)=>{
    const id = req.params.id
    const response = await DAO.ProductDAO.getId(id)
    res.json( response )
}

const updateProducto = async(req,res)=>{
    const editProduct = req.body
    await DAO.ProductDAO.updateObject(editProduct)
}
const deleteProduct = async(req,res)=>{
    const id = req.params.id
    await DAO.ProductDAO.deleteObject(id)
}
export default { getAll , addProducts, idProducts,updateProducto,deleteProduct}