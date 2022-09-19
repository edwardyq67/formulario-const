
import { useState } from 'react'
import './App.css'
import ProducstsForm from './components/ProducstsForm'
import ProductsList from './components/ProductsList'

function App() {
    const initialProducts=[
      {
        id:1,
        name:"pan",
        category:"food",
        price:0.5,
        isAvailable:true
      },
      {
        id:2,
        name:"laptop",
        category:"technology",
        price:1000,
        isAvailable:false
      }
    ]
    const [products,setProducts]=useState(initialProducts)
    const [productSelected,setProductSelected]=useState(null);
    const addProduct=(newProduct)=>{
      alert("se agrego")
      setProducts([...products,newProduct])
    }
    const deleteProduct=(id)=>{
      alert("eliminando")
      const filteredProducts=products.filter(products=>products.id !== id)
      setProducts(filteredProducts)
    } 
    const selectProduct=(product)=>{
      alert("seleccionar")
      setProductSelected(product)
    }
    console.log(productSelected)

    const updateProduct=(newProduct)=>{
      newProduct.id=productSelected.id
      const index=products.findIndex(products=>products.id===newProduct.id)
      products[index]=newProduct;
      setProducts([...products])
      alert("actualizando")
    }
    const deselectProduct=()=>{
      setProductSelected(null)
    }
  return (
    <div className="App">
      
       App.js
       <ProducstsForm deselectProduct={deselectProduct} addProduct={addProduct} productSelected={productSelected} updateProduct={updateProduct}/>
       <ProductsList products={products} deleteProduct={deleteProduct} selectProduct={selectProduct}/>
    </div>
  )
}

export default App
