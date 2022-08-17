import admin from "firebase-admin";
import config from "./../config.js";
admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const db = admin.firestore()

class ContainerFirebases {
    constructor(nameCollection){
        this.collection = db.collection(nameCollection)
    }
    async getAll(){
        const querySnapshot = await this.collection.get()
        const data = []
        querySnapshot.forEach(doc => {
                let obj = {}
                obj = doc.data();
                obj._id = doc.id
                data.push(obj)
            });
            return data;
    }
    async addObject(newProduct){
        const res = await this.collection.add(newProduct);
        console.log(`new product add `)
    }
    async getId(idProduct){
        const doc = await this.collection.doc(idProduct).get();
        const data = doc.data();
        data._id = idProduct;
        return data;
    }
    async updateObject(product){
        const doc = this.collection.doc(product.id);
        await doc.update(product);
        console.log(`product update : ${product._id}`)
    }
    async deleteObject(idProduct){
        const doc = this.collection.doc(idProduct);
        await doc.delete();
        console.log(`product delete: ${idProduct}`)
    }

    async updateOne(idCart,products){
        const doc = this.collection.doc(idCart);
        await doc.update(products);
        console.log(`cart update : ${idCart}`)
    }
}

export default ContainerFirebases