import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider';
import {FaGoogle} from 'react-icons/fa'

export default function SignUp() {

  const {register, handleSubmit, formState: {errors}}=useForm();
  const {createUser, updateUser}=useContext(AuthContext);

  const handleSignUp = data =>{
    console.log(data)
  
    createUser(data.email,data.password)
    .then(result=>{
        const user = result.user
        console.log(user);
        toast('user created successfully')
        const userInfo ={
            displayName :data.name 
        };
        updateUser(userInfo)
        .then(()=>{
        
        })
        .catch(err=>console.error(err))
    })
    .catch(error => {
        console.error(error.message)
  
    })
}   

  return (
    <div  className="h-[800px] flex justify-center items-center" >
    <div className=" w-96 p-7">
        <h2 className='text-xl text-center font-bold'>Sign Up</h2>
<form onSubmit={handleSubmit(handleSignUp)}>


<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Name</span>
</label>
<input {...register("name", {required:"Name is required"})} 
  type="text" 
  className="input input-bordered w-full max-w-xs" />
   
</div>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Email</span>
</label>
<input {...register("email", {required:"Email Address is required"})} 
  type="text" 
  className="input input-bordered w-full max-w-xs" />
    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
</div>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Password</span>
</label>

<input {...register("password", {required:"Password is required",
})} 
 type="password" 
 className="input input-bordered w-full max-w-xs" />
   

</div>


<input className='w-full btn btn-primary font-bold text-secondary mt-5' value='Sign Up 'type="submit" />

{/* <div className="">
        {
          signupError && <p className='text-red-600'>{signupError}</p>
        }
      </div> */}
</form>

<p className='font-bold mt-5'> Already have an account? <Link className='text-secondary' to='/login'>Login</Link></p>
<div className="divider">OR</div>
<button className='btn btn-outline w-full hover:btn-primary hover:text-secondary hover:font-bold'> <FaGoogle className='m-1'/>  CONTINUE WITH GOOGLE</button>

    </div>
   
</div>
  )
}
