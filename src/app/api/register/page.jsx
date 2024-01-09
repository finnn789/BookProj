'use client'
import Link from "next/link";
import { useEffect, useState } from "react";



const ProductPage = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('api/db/database').then((res) => res.json()).then((data) => 
        {
        setProducts(data.data)    
        })
    },[])
    
    return (
        <div>
            <h1>
                Product Page  
                {setProducts}

            </h1>
            
        </div>
    )

}

export default ProductPage;