"use client";

import {useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/authStore";


const Navbar = () => {
  
  const { id, role, logout } = useAuthStore();
  const user = id !== null;
  const [scrolled, setScrolled] = useState(false);  
  const router = useRouter();


  useEffect(() => 
  {
    const handleScroll = () => 
    {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
  }, []); 

  const handleSignOut = () => {
    router.push("/");
    logout();
  }

  return (<>
    <nav className={`sticky top-2 mt-5 scroll-mt-10 border-b-2 rounded-xl mx-4 z-10 ${scrolled ? 'bg-black text-white p-0.5' : ''}`}>
      <div className='flex justify-between items-center mx-5 my-3'>
          <div className='flex items-center'>
              <h1 className='text-4xl'>Leave Management System</h1>
          </div>
          <div>
              <div className='flex gap-7 text-xl'>
                <div>
                  <Link href="/"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house inline mb-1"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> Home</button></Link>
                </div>
                <div>
                  {(role === 'student') ? (<>{user ? (<Link href="/ask"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen-icon lucide-notebook-pen inline mb-1"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>Ask</button></Link>) : 
                  (<Link href="/signin"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen-icon lucide-notebook-pen inline mb-1"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg> Ask</button></Link>)}</>) : (<></>) }
                  
                </div>
                <div>
                  {user ? (<Link href="/status"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing inline mb-1 me-1"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg> Status</button></Link>) : 
                  (<Link href="/signin"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing inline mb-1 me-1"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg> Status</button></Link>)}
                </div>
                {user ?(<>
                <div>
                  <button onClick={handleSignOut}  className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-red-500 hover:text-white' : 'hover:bg-red-500 hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out inline me-3"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>Log Out </button>
                </div>  
                </>):(
                <div className='flex gap-7'>
                  <div>
                    <Link href="/signin"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in-icon lucide-log-in  inline mb-1"><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg> Sign In</button></Link>
                  </div>
                </div>)}
              </div>
          </div>
        </div>
    </nav>
  </>)
}

export default Navbar;