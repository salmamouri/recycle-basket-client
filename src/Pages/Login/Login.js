import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {FaGoogle} from 'react-icons/fa'
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


export default function Login() {
  const {signIn,googleSignIn} = useContext(AuthContext);

  const {register, handleSubmit, formState: {errors}}=useForm();
  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const provider = new GoogleAuthProvider();
const handleGoogleSignIn = () => {
  googleSignIn(provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => console.error(error));
};

  return (
    <div className="h-[800px] flex justify-center items-center">
    <div className=" w-96 p-7">
      <h2 className="text-xl text-center font-bold">Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Email Address is required" })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            {...register("password", {
              required: "Password is required",
             
            })}
            type="password"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
          <label className="label">
            <span className="label-text">Forget Password</span>
          </label>
        </div>

        <input
          className="w-full btn btn-primary font-bold text-secondary"
          value="Login "
          type="submit"
        />
        
      </form>

      <p className="font-bold mt-5">
        
        New to Recycle Basket? 
          <Link className="text-secondary ml-1" to="/signup">
            Create new account
        </Link>
      </p>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className='btn btn-outline w-full hover:btn-primary hover:text-secondary hover:font-bold'> <FaGoogle className='m-1'/> CONTINUE WITH GOOGLE</button>
    </div>
  </div>
  )
}
