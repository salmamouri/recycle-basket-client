import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider'

export default function AddProduct() {
  const {user} =useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit =(event)=>{
    event.preventDefault();
    const form = event.target;
    const email= form.email.value;
    const name= form.name.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const resale = form.resale.value;
    const location = form.location.value;
    const image = form.image.value;
    const category = form.category.value;
    const condition = form.condition.value;
    const posted = form.posted.value;
    const product = form.product.value;
    const  used= form.used.value;
    console.log(name, email,category,product,image,condition,price,resale,used,location,posted,phone,);

    const addProduct = {
      name:name,
      email:email,
      category:category,
      name:product,
      img:image,
      location:location,   
      original_price:price,
      resale_price:resale,
      used:used,
      condition:condition,
      phone:phone,
      posted:posted
    };
 
     fetch('http://localhost:5000/products',{
       method:"POST",
       headers:{
           'content-type':'application/json'
       },
       body:JSON.stringify(addProduct)
   })
   .then(res=>res.json())
   .then(data=>{
       console.log(data)
       if ( data.acknowledged){
           toast.success('Product Added',{
             position: toast.POSITION.TOP_CENTER});
             form.reset();
             navigate('/dashboard/myproducts')
        
           
       }
       else{
         toast.error(data.message)
       }
 
   })
 
 
    
  }


  return (
    <div>
      
      <form style={{width:'250px'}}
            onSubmit={handleSubmit}
            className="grid gap-8"
          >
            <input
              name="name"
              type="text"
              placeholder="YourName"
              defaultValue={user?.displayName}
              
              className="input  input-bordered "
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              
              placeholder="Your Email"
              className="input  input-bordered "
            />
      
       
            <div className="">
              <label>Catrgory</label><br/>
              <select className='border border-xl mt-2' id="category" name="category">
                  <option value="Woman">Woman</option>
                  <option value="Man">Man</option>
                  <option value="Baby">Baby</option>
                 
                </select>
            </div>

            <div className="">
              <label>Product Name</label>
            <input
              name="product"
              type="text" className="input  input-bordered "
            />
            </div>
            <div className="">
            <label >Image Url</label>
           <input
              name="image"
              type="text" className="input  input-bordered "
            />
           </div>

            <div className="">
              <label>Condition</label><br/>
              <select className='border border-xl mt-2' id="condition" name="condition">
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                 
                </select>
            </div>

            <div className="">
            <label >Original Price</label>
            <input
              name="price"
              type="text" className="input  input-bordered "
            />
            </div>
            <div className="">
            <label >Resale price</label>
            <input
              name="resale"
              type="text" className="input  input-bordered "
            />
            </div>
            <div className="">
            <label >Used For</label>
            <input
              name="used" placeholder='days, months,years'
              type="text" className="input  input-bordered "
            />
            </div>
            <div className="">
            <label >Location</label>
            <input
              name="location"
              type="text"className="input  input-bordered "
            />
            </div>
            <div className="">
            <label >Posted Time & Date</label>
            <input
              name="posted"
              type="text"className="input  input-bordered "
            />
            </div>

          
            <input
              name="phone" type="text"
              placeholder='Phone Number' className="input  input-bordered "
            />
          <button type='submit' className='btn btn-primary'> Add Product</button>
         
   </form>
   
    </div>
  )
}
