import Link from 'next/link';
function Footer() {
  return (<>
  <hr />
    <footer className='flex flex-wrap justify-around items-center p-5 mb-5'>
        <div>
            <p>© 2025 Designed & Developed by Dharun Nagavel.</p>
        </div>
        <div className='mt-5'>
          <ul>
            <li className='border-b-2 font-semibold'>Quick Links</li>
            <li className='my-5'><Link href="/" className="p-3 rounded-3xl hover:bg-black hover:text-white hover:shadow-md hover:shadow-black hover:scale-110 transition-all cursor-pointer duration-300">Home</Link></li>
            <li className='my-5'><Link href="/ask" className="p-3 rounded-3xl hover:bg-black hover:text-white hover:shadow-md hover:shadow-black hover:scale-110 transition-all cursor-pointer duration-300">Ask</Link></li>
            <li className='my-5'><Link href="/status" className="p-3 rounded-3xl hover:bg-black hover:text-white hover:shadow-md hover:shadow-black hover:scale-110 transition-all cursor-pointer duration-300">Status</Link></li>
          </ul>
        </div>
        <div>
            <ul className='flex flex-col justify-center items-center'>
                <a href="https://www.linkedin.com/in/dharun-naga-vel-1748bb2b4" target='blank'><li className='inline-block p-4 hover:bg-black hover:shadow-md hover:shadow-black hover:text-white rounded-3xl transition-all cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin inline mx-3 mb-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>LinkedIn</li></a>
                <a href="https://mailto:dharunnagavel1226@gmail.com" target='blank'><li className='inline-block me-8 p-4 hover:shadow-md hover:shadow-black hover:bg-black hover:text-white rounded-3xl transition-all cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-icon lucide-send inline mx-3 "><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>Mail</li></a>
                <a href="https://wa.me/916383452074" target='blank'><li className='inline-block ms-5 p-4 hover:bg-black hover:shadow-md hover:shadow-black hover:text-white rounded-3xl transition-all cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone inline mx-3"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>Whatsapp</li></a>
            </ul>
        </div>
    </footer>
  </>)
}

export default Footer;