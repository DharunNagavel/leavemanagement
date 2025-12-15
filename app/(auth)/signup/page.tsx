"use client";

import Link from 'next/link';
import  {useRouter}  from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "@/app/store/authStore";

const Page = () => {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent) => 
    {
      e.preventDefault();
      const res = await fetch("http://localhost:3000/api/signup", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name,email,role,organization,password}),
      });
      const data = await res.json();
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
    <div className='flex flex-col items-center justify-center min-h-screen p-2'>
      <div className='bg-black text-white p-10 rounded-2xl'>
        <div className='flex items-center justify-center'>
          <h1 className='text-5xl text-center'>Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 m-8'>
          <input 
            type="text" 
            name='name'
            onChange={(e)=>{setName(e.target.value)}}
            placeholder='Enter the Username' 
            className='text-xl rounded-xl p-2 border-2' 
            required />
          <input 
            name='email'
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email" 
            placeholder='Enter the Email' 
            className='text-xl rounded-xl p-2 border-2' 
            required />
          <div>
            <label>Role</label><br />
            <div className='flex justify-center'>
              <input 
                type="radio" 
                onChange={(e)=>{setRole(e.target.value)}}
                value="student"
                name='role' 
                checked={role==="student"} />
              <span className='ms-2 me-5'>Student</span>
              <input 
                type="radio" 
                onChange={(e)=>{setRole(e.target.value)}}
                name='role'
                checked={role==="teacher"} 
                value="teacher"/>
              <span className='ms-2'>Teacher</span>
            </div>
          </div>
          <input 
            type="text" 
            placeholder='Name of the Organitazion'
            onChange={(e)=>{setOrganization(e.target.value)}}
            name='organization' 
            className='text-xl rounded-xl p-2 border-2' 
            required />
          <input 
            type="password" 
            name='password'
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder='Enter the Password' 
            className='text-xl rounded-xl p-2 border-2' 
            required />
          <input 
            type="password" 
            placeholder='Conform Password' 
            className='text-xl rounded-xl p-2 border-2' 
            required />
          <button className='border-2 p-2 text-2xl border-white rounded-2xl hover:bg-white hover:text-black'>Sign Up</button>
        </form>
        <div className='m-8 text-center'>
          <p>Already have an Account? <Link href="/signin" className='text-blue-500 hover:text-white'>Signin</Link></p>
        </div>
      </div>
    </div>
  )
}
export default Page