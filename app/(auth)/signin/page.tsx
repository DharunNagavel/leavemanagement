"use client";

import Link from "next/link";
import  {useRouter}  from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "@/app/store/authStore";

export default function Page() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
    setAuth({
      id: data.id,
      username: data.name,
      role: data.role,
      organization: data.organization,
    });
    router.push("/");
    console.log(data);
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='bg-black text-white p-10 rounded-2xl'>
        <div className='flex items-center justify-center'>
          <h1 className='text-5xl text-center'>Sign In</h1>
        </div>
        <form onSubmit={handleSubmit} method='post' className='flex flex-col gap-8 m-8'>
          <input
            onChange={(e)=>{setEmail(e.target.value)}} 
            type="text" 
            placeholder='Enter the Email' 
            name="email" 
            className='text-xl rounded-xl p-2 border-2' 
            required />
          <input 
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password" 
            placeholder='Enter the Password' 
            name="password" 
            className='text-xl rounded-xl p-2 border-2' 
            required />
          <button className='border-2 p-2 text-2xl border-white rounded-2xl hover:bg-white hover:text-black'>Sign In</button>
        </form>
        <div className='m-8 text-center'>
          <p>Don&apos;t have an Account? <Link href="/signup" className='text-blue-500 hover:text-white'>SignUp</Link></p>
        </div>
      </div>
    </div>
  );
}


