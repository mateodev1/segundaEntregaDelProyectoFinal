import ContainerFirebases from './../../container/containerFirebase.js'

class CartFirebasesDAO extends ContainerFirebases {
    constructor(){
        super('carts')
    }
}
export default CartFirebasesDAO