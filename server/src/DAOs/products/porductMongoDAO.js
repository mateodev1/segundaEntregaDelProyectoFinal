import ContainerMongo from './../../container/containerMongo.js'

class ProductMongoDAO extends ContainerMongo{
    constructor(){
        super('products',{
            name : { type : String, required: true},
            description : { type: String, required: true },
            price : { type: Number, required: true },
            stock : { type: Number, required: true },
            url : { type: String, required: true },
            timestamp : { type: Number, required: true }
        })
    }
}

export default ProductMongoDAO