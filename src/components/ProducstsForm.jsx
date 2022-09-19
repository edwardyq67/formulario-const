import React, { useEffect, useState } from 'react';

const ProducstsForm = ({addProduct,productSelected,updateProduct,deselectProduct}) => {
    const [name,setName]=useState("");
    const [category,setCategory]=useState("");
    const [price,setPrice]=useState("")
    const [isAvailable,setIsAvailable]=useState(false)
    useEffect(()=>{
        if(productSelected !== null){
            setName(productSelected.name),
            setCategory(productSelected.category),
            setPrice(productSelected.price),
            setIsAvailable(productSelected.isAvailable)
        }
        
    },[productSelected])

    const submit=e=>{
        e.preventDefault();
        
        const newProduct={
            id:Date.now(),
            name:name,
            category:category,
            price:price,
            isAvailable:isAvailable
        }
        console.log(newProduct)
        if(productSelected){
            updateProduct(newProduct)
        }else{
           addProduct(newProduct); 
        }
        
    }
    const clear=()=>{
        setName(""),
        setCategory(""),
        setPrice(""),
        setIsAvailable(false)
        deselectProduct()
    }
    return (
       <form onSubmit={submit}>
        <div className='input-container'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={e=>setName(e.target.value)} required/>
        </div>
        <div className='input-container'>
            <label htmlFor="Category">Category</label>
            <input type="text" id="Category" value={category} onChange={e=>setCategory(e.target.value)}/>
        </div>
        <div className='input-container'>
            <label htmlFor="Price">Price</label>
            <input type="number" id="Price" value={price} onChange={e=>setPrice(e.target.value)}/>
        </div>
        <div className='input-container'>
            <label htmlFor="isAvailable">isAvailable</label>
            <input type="checkbox" id="naisAvailableme" checked={isAvailable} onChange={e=>setIsAvailable(e.target.checked)}/>
        </div>
        <button>{productSelected?<i class="fa-regular fa-paper-plane"></i>:<i class="fa-regular fa-folder-open"></i>}</button>
        <button onClick={clear}><i class="fa-solid fa-rotate-right"></i></button>
       </form>  
    );
};

export default ProducstsForm;