"use client";
//by using the above decorator we can make this page as the client component

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
       <div className="flex flex-col items-center justify-center py-2 p-4 shadow-xl shadow-cyan-500/50">
      <h1>Login</h1>
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
