"use client";
//by using the above decorator we can make this page as the client component

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setuser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>SignUp</h1>
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
      <button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">SignUp</button>
      <Link href="/login">Already have an account ? Login</Link>
    </div>
  );
}
