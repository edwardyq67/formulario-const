import React from 'react';

const ProductsList = ({products,deleteProduct,selectProduct}) => {
    return (
        <div>
            ProductsList
            <ul>
                {
                products.map(product=>(
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <div><b>category: </b>{product.category}</div>
                        <div><b>price: </b>{product.price}</div>
                        <div><b>is available: </b>{product.isAvailable.toString()}</div>
                        <button onClick={()=>deleteProduct(product.id)}><i class="fa-solid fa-trash"></i></button>
                        <button onClick={()=>selectProduct(product)}><i class="fa-solid fa-pen-to-square"></i></button>
                    </li>
                    
                ))
            }
            </ul>
            
        </div>
    );
};

export default ProductsList;