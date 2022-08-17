import ContainerFirebases from './../../container/containerFirebase.js'

class ProductFirebasesDAO extends ContainerFirebases {
    constructor(){
        super('products')
    }
}
export default ProductFirebasesDAO