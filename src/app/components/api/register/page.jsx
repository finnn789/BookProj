'use client'
import Link from "next/link";
import { useEffect, useState } from "react";



const ProductPage = () => {
    const [products,setProducts] = useState("Product");
    useEffect(() => {
        fetch('api/data/hello').then((res) => res.json()).then((data) => 
        {
        setProducts(data.data)
            
        })
    },[])
    return (
        <div>
            <h1>
                Product Page  
                
                    {products}

            </h1>
            
        </div>
    )

}

export default ProductPage;