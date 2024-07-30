import React, { useState } from 'react'
import Cards from '../Cards/Cards'

export default function Products() {
   const [products,setProduct] = useState([
        {id : 1,
            name : "Samsung",
            category : "tv",
            price : 5500,
            count : 10,
            onSale : true
        },
        {id : 2,
            name : "Iphone",
            category : "mobile",
            price : 10000,
            count : 25,
            onSale : false
        },
        {id : 3,
            name : "Dell",
            category : "laptop",
            price : 15000,
            count : 64,
            onSale : true
        },
        {id : 4,
            name : "Oppo",
            category : "mobile",
            price : 2000,
            count : 1,
            onSale : false
        }
    ])
    function deleteProduct(id){
        const newProduct = structuredClone(products);
        const res = newProduct.filter((ele)=>ele.id!=id)
        setProduct(res);
    }
    function updateProduct(index){
        const newProduct = structuredClone(products);
        newProduct[index].count++;
        setProduct(newProduct);
    }
  return (
    <div className='container mx-auto'>
    <div className='flex flex-wrap -mt-3 lg:mt-0'>
    {products.map((product,index)=> <Cards index={index} upd={updateProduct} del={deleteProduct} pro={product} />)}
    </div>

    </div>
  )
}
