import React,{useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const UpdateProduct = () =>{
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")
    const params = useParams()
    const navigate = useNavigate()

useEffect(() =>{

  getProductDetails()
},[])

const  getProductDetails = async() =>{
 console.log(params)
 let result = await fetch(`http://localhost:5000/product/${params.id}`)
 result = await result.json()
 setName(result.name)
 setPrice(result.price)
 setCategory(result.category)
 setCompany(result.company)
}

  const updateProduct = async () =>{
console.log(name,price,category,company)
let result = await fetch(`http://localhost:5000/product/${params.id}`,{
  method:'PUT',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':'application/json'
        }
})
result = await result.json()
if(result) {
  navigate("/")
}


  }


    return (
        <div className='product'>
            <h1>Update  Product</h1>
          
            <input type="text" placeholder='Enter Product Name' className='inputBox' onChange={(e) => setName(e.target.value)} value={name}/>
         
            <input type="text" placeholder='Enter Product Price'  className='inputBox'  onChange={(e) => setPrice(e.target.value)} value={price}/>
            
            <input type="text" placeholder='Enter Product Category'  className='inputBox'  onChange={(e) => setCategory(e.target.value)} value={category}/>
             
            <input type="text" placeholder='Enter Product Company'  className='inputBox'  onChange={(e) => setCompany(e.target.value)} value={company}/>
         
            <button onClick={updateProduct} className='appButton'>Update Product</button>
        </div>
    )
}

export default UpdateProduct