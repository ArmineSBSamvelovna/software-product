import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('https://eb99-2804-431-c7f4-db6b-4bd-a503-757b-4f47.sa.ngrok.io/api/products') //back http://localhost:7000
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
  
    
    return (
        <>    
            <ProductList products={products} />
        </>
    )

}
