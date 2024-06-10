"use client";
//by using the above decorator we can make this page as the client component

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router=useRouter();
  const [buttonDisabled,setButtonDisabled]=useState(false)
  const [loading,setLoading]=useState(false)
  const [user, setuser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {
    setLoading(true)
    try {
   const res =  await  axios.post("/api/users/signup",user);
   console.log("Signup success",res.data);   
   router.push("/login") 
    } catch (error:any) {
      toast.error(error.message)
    }finally{
      setLoading(false);
    }

  };

  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  },[user])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <div className="flex flex-col items-center justify-center py-2 p-4 shadow-xl shadow-cyan-500/50">
      <h1 className="m-4 text-xl">{loading?"Signing...":"SignUp"}</h1>
      <hr />
      <label htmlFor="username">username :</label>
      <input
       className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-transparent" 
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setuser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <hr />
      <label htmlFor="email">email :</label>
      <input
       className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-transparent" 
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setuser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <hr />
      <label htmlFor="password">password :</label>
      <input
       className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-transparent" 
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setuser({ ...user, password: e.target.value })}
        placeholder=""
      />
      <button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled? "No Signup":"Signup"}</button>
      <Link href="/login">Already have an account ? Login</Link>
      </div>
    </div>
  );
}
