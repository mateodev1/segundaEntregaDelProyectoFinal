import dotenv from 'dotenv'
dotenv.config()

let ProductDAO
let CartDAO

switch (process.env.DATABASE) {
    case 'mongo':
        console.log('mongo database')
        const { default:ProductMongoDAO } = await import('./products/porductMongoDAO.js')
        const { default:CartMongoDAO} = await import('./cart/cartMongoDAO.js')

        ProductDAO = new ProductMongoDAO()
        CartDAO = new CartMongoDAO()
        break;
    case 'firebase':
        console.log('firebase database')
        const { default:ProductFirebasesDAO} = await import('./products/porductFirebasesDAO.js')
        const { default:CartFirebasesDAO} = await import('./cart/cartFirebasesDAO.js')
        ProductDAO = new ProductFirebasesDAO()
        CartDAO = new CartFirebasesDAO()
        break;
}
export default {ProductDAO,CartDAO}