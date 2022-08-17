import ContainerMongo from './../../container/containerMongo.js'

class CartMongoDAO extends ContainerMongo{
    constructor(){
        super('cart',{
            timestamp : { type: Number, required: true },
            products : {type: Array , required: true}
        })
    }
}

export default CartMongoDAO