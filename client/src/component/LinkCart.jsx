import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LinkCart = () => {
    const [urlCart, setUrlCart] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:8080/api/carrito/`,{
            method:"GET",
            })
            .then(res=>res.json())
            .then(res=>res.map(item=>setUrlCart(item._id)))
            .catch(res=>console.log(res))
    },[urlCart])
    return (<>
         {
            urlCart?
            <Link to={`/carrito/${urlCart}`}>Carrito</Link>
         :
         <></>
        }
        </>);
}

export default LinkCart;