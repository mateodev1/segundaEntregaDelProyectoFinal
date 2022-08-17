import express from 'express'
import dotenv from 'dotenv'
import cartRoute from './routes/routeCart.js'
import productRoute from './routes/routeProducts.js'
import cors from 'cors'
dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(cors({
	origin: '*',
	optionsSuccessStatus: 200
}));

app.use(express.json())

app.use('/api/carrito',cartRoute)
app.use('/api/productos',productRoute)

app.listen(PORT,(err)=>{
    if (err){console.log('Server error')}

    console.log(`Server listening on port: ${PORT}`)
})