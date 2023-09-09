import React,{useState} from 'react'
import axios from 'axios'

function CreateRecipe() {
    const [recipe,setRecipe]=useState({
        name:"",
        description:"",
        ingredients:"",
        imageurl:"",
        userId:window.localStorage.getItem("id")
    })
    const handleChange=(event)=>{
        const {name,value}=event.target
        setRecipe({...recipe,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:3001/recipe/create-recipe',recipe)
        .then(result=>{
            console.log(result.data)
            alert("recipe created")
        }).catch(err=>console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'> 
    <div className='p-3 border border-1 w-25'>
        <h3>Create Recipe</h3>
       <form onSubmit={handleSubmit}>
        <div className="mt-3">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="name">Description</label>
            <input type="text" placeholder='Enter Description' className='form-control' onChange={handleChange}/>
        </div>
        <div className="mt-3">
            <label htmlFor="ingr">Ingridents</label>
            <input type="text" placeholder='Enter Ingr' className='form-control' name='imageurl' onChange={handleChange}/>
        </div>
        <div className="mt-3">
            <label htmlFor="imageurl">Image Url</label>
            <input type="text" placeholder='Enter Url' className='form-control' name='imageurl' onChange={handleChange}/>
        </div>
        <button className='mt-1 btn btn-success w-100'>Submit</button>
       
       </form>
    </div>
    </div>
  )
}

export default CreateRecipe