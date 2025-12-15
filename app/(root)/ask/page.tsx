"use client";
import Calendar from "@/components/calender"
import { useState } from "react";
import { useAuthStore } from "@/app/store/authStore"
const Page = () => {
  const { id} = useAuthStore();
  const [name, setName] = useState("");
  const [datefrom, setDateFrom] = useState("");
  const [dateto, setDateTo] = useState("");
  const [organization, setOrganization] = useState("");
  const [purpose, setPurpose] = useState("");
  const [exam, setExam] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/leave", 
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, datefrom, dateto, organization, purpose, exam, year, section,userid : id }),
    });
    const data = await res.json();
    console.log(data);
    setName("");
    setDateFrom("");
    setDateTo("");
    setOrganization("");
    setPurpose("");
    setExam("");
    setYear("");
    setSection("");
  }
  
  return (
    <>
     <div className="flex min-h-screen flex-wrap">
        <aside className="w-full md:w-80 lg:w-120 p-6 border-r">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          </header>
          <div className="space-y-4">
            <div className="mx-auto mt-10">
              <Calendar />
            </div>
          </div>
        </aside>
        <main className="flex-1">
          <div className="p-8">
            <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl">
              <h2 className="text-3xl font-bold mb-8">Leave Form</h2>
              <div className="bg-black text-white min-h-screen p-6 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className='flex gap-8 justify-center flex-wrap mt-30'>
                    <div className="pe-4 border-r">
                      <label className="text-xl">Name :</label><br/>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter the name"
                        className="text-xl rounded-xl p-2 border-2 my-3"
                        required
                      /><br />
                      <label className="text-xl">Date :</label>
                      <div className="ms-10">
                        <label className="text-xl">From :</label><br />
                        <input 
                          type="date"
                          name="dateFrom"
                          value={datefrom}
                          onChange={(e)=>{setDateFrom(e.target.value)}} 
                          className="ms-2 text-xl rounded-xl p-2 border-2 my-3" 
                          required /><br />
                        <label className="text-xl">To :</label><br />
                        <input 
                          type="date"
                          name="dateTo"
                          value={dateto}
                          onChange={(e)=>{setDateTo(e.target.value)}} 
                          className="ms-2 text-xl rounded-xl p-2 border-2 my-3" 
                          required /><br />  
                        <label className="text-xl">Year :</label><br />
                        <div className='flex justify-center mt-2'>
                          <input 
                            type="radio" 
                            name='year' 
                            value="I"
                            checked={year === "I"}
                            onChange={(e)=>{setYear(e.target.value)}} />
                            <span className='ms-2 me-5'>I</span>
                          <input 
                            type="radio" 
                            name='year' 
                            value="II"
                            checked={year === "II"}
                            onChange={(e)=>{setYear(e.target.value)}} />
                            <span className='ms-2 me-5'>II</span>
                          <input 
                            type="radio" 
                            name='year' 
                            value="III"
                            checked={year === "III"}
                            onChange={(e)=>{setYear(e.target.value)}} />
                            <span className='ms-2 me-5'>III</span>
                          <input 
                            type="radio" 
                            name='year' 
                            value="IV"
                            checked={year === "IV"}
                            onChange={(e)=>{setYear(e.target.value)}}/>
                            <span className='ms-2'>IV</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-xl">Name of the Organization :</label><br/>
                      <input 
                        type="text" 
                        placeholder='name of the organization' 
                        name="organization"
                        value={organization}
                        onChange={(e)=>{setOrganization(e.target.value)}}
                        className='text-xl rounded-xl p-2 border-2 my-3' 
                        required /><br />
                      <label className="text-xl">Purpose of Leave :</label><br />
                      <textarea 
                        className="text-xl h-40 w-100 rounded-xl p-2 border-2 my-3" 
                        name="purpose"
                        value={purpose}
                        onChange={(e)=>{setPurpose(e.target.value)}}
                        placeholder="Enter the Purpose of Leave"
                        required></textarea><br />
                      <label className="text-xl">is there any exam in the leave period?</label><br />
                      <div className='flex justify-center mt-2'>
                        <input 
                          type="radio" 
                          name='exam' 
                          value="yes"
                          checked={exam === "yes"}
                          onChange={(e)=>{setExam(e.target.value)}} />
                          <span className='ms-2 me-5'>Yes</span>
                        <input 
                          type="radio" 
                          name='exam' 
                          value="no"
                          checked={exam === "no"}
                          onChange={(e)=>{setExam(e.target.value)}} />
                          <span className='ms-2'>No</span>
                      </div>
                      <label className="text-xl">Section :</label><br />
                        <div className='flex justify-center mt-2'>
                          <input 
                            type="radio" 
                            name='section' 
                            value="A"
                            checked={section === "A"}
                            onChange={(e)=>{setSection(e.target.value)}} />
                            <span className='ms-2 me-5'>A</span>
                          <input 
                            type="radio" 
                            name='section' 
                            value="B"
                            checked={section === "B"}
                            onChange={(e)=>{setSection(e.target.value)}} />
                            <span className='ms-2 me-5'>B</span>
                          <input 
                            type="radio" 
                            name='section' 
                            value="C"
                            checked={section === "C"}
                            onChange={(e)=>{setSection(e.target.value)}} />
                            <span className='ms-2 me-5'>C</span>
                          <input 
                            type="radio" 
                            name='section' 
                            value="D"
                            checked={section === "D"}
                            onChange={(e)=>{setSection(e.target.value)}} />
                            <span className='ms-2'>D</span>
                        </div>
                    </div>
                  </div>
                  <div className="flex justify-center me-20 mt-10">
                    <button className="border-white border rounded-xl p-3 hover:text-black hover:bg-white">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Page