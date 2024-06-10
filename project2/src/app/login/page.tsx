"use client";
//by using the above decorator we can make this page as the client component

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router=useRouter();
  const [buttonDisabled,setButtonDisabled]=useState(false)
  const [loading,setLoading]=useState(false)
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    setLoading(true)
    try { 
    const res =  await  axios.post("/api/users/login",user);
    console.log("Login is successfull",res.data);   
    toast.success("Login is Successfull ")
    router.push("/profile") 
      
    } catch (error:any) {
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  };
  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0 ){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  },[user])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
       <div className="flex flex-col items-center justify-center py-2 p-4 shadow-xl shadow-cyan-500/50">
      <h1>{loading? "Signing you in...":"Sign In"}</h1>
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
      <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login</button>
      <Link href="/signup">Don't have an account ? Signup</Link>
      </div>
    </div>
  );
}
