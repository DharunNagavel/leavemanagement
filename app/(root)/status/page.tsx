"use client";

import { useAuthStore } from "@/app/store/authStore";
import { useState, useEffect } from "react";

const Page = () => {
  const {id, role, organization} = useAuthStore();
  const [leaves, setLeaves] = useState([]);
  const [Tfetch, setTfetch] = useState([]);
  const [filter, setFilter] = useState("All"); // State to track current filter

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/status/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch leaves');
        }
        const result = await res.json();
        setLeaves(result.data);
      } catch (error) {
        console.error('Error fetching leaves:', error);
      }
    };
    if (id) { 
      fetchdata();
    }
  }, [id]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/status/organization/${organization}`);
        if (!res.ok) {
          throw new Error('Failed to fetch leaves for organization');
        }
        const result = await res.json();
        setTfetch(result.data);
      } catch (error) {
        console.log('Error fetching leaves for organization:', error);
      }
    };
    fetchdata();
  }, [organization]);

  const handleAccept = async (leaveId: number) => {
    await fetch(`http://localhost:3000/api/status/accept/${leaveId}`, {
      method: "POST",
    });
    setTfetch((prev) =>
      prev.map((item) =>
        item.id === leaveId ? { ...item, status: "accepted" } : item
      )
    );
  };

  const handleReject = async (leaveId: number) => {
    await fetch(`http://localhost:3000/api/status/reject/${leaveId}`, {
      method: "POST",
    });
    setTfetch((prev) =>
      prev.map((item) =>
        item.id === leaveId ? { ...item, status: "rejected" } : item
      )
    );
  };

  // Filter function for student view
  const filterStudentLeaves = (leavesArray) => {
    if (filter === "All") return leavesArray;
    if (filter === "Pending") return leavesArray.filter(item => item.status === "pending");
    if (filter === "Accepted") return leavesArray.filter(item => item.status === "accepted");
    if (filter === "Rejected") return leavesArray.filter(item => item.status === "rejected");
    return leavesArray;
  };

  // Filter function for teacher view
  const filterTeacherLeaves = (leavesArray) => {
    if (filter === "All") return leavesArray;
    if (filter === "Pending") return leavesArray.filter(item => item.status === "pending");
    if (filter === "Accepted") return leavesArray.filter(item => item.status === "accepted");
    if (filter === "Rejected") return leavesArray.filter(item => item.status === "rejected");
    return leavesArray;
  };

  // Filtered data
  const filteredStudentLeaves = filterStudentLeaves(leaves);
  const filteredTeacherLeaves = filterTeacherLeaves(Tfetch);

  return (
    <>
      <div>
        <div className="flex justify-evenly text-3xl my-10">
          <div>
            <button 
              className={`hover:cursor-pointer p-3 rounded-xl ${filter === "All" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
          </div>
          <div>
            <button 
              className={`hover:cursor-pointer p-3 rounded-xl ${filter === "Pending" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
              onClick={() => setFilter("Pending")}
            >
              Pending
            </button>
          </div>
          <div>
            <button 
              className={`hover:cursor-pointer p-3 rounded-xl ${filter === "Accepted" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
              onClick={() => setFilter("Accepted")}
            >
              Accepted
            </button>
          </div>
          <div>
            <button 
              className={`hover:cursor-pointer p-3 rounded-xl ${filter === "Rejected" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
              onClick={() => setFilter("Rejected")}
            >
              Rejected
            </button>
          </div>
        </div>
        
        {role === 'student' 
        ? (
          <div className="flex flex-col items-center">
            {/* Check if there are any filtered leaves */}
            {filteredStudentLeaves.length === 0 ? (
              <div className="text-center my-20">
                <p className="text-2xl font-semibold text-gray-600">
                  {filter === "All" ? "No records found" : `No ${filter.toLowerCase()} records found`}
                </p>
              </div>
            ) : (
              filteredStudentLeaves.map((item) => (
                <div key={item.id} className="bg-black text-white h-60 w-250 rounded-xl my-10 p-5">
                  <div className="flex justify-between">
                    <h1 className="text-3xl">{item.name}</h1>
                    <span className="text-2xl bg-white text-black p-2 rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xl m-5">{item.organization}</p>
                  <p className="m-5">Purpose : {item.purpose}</p>
                  <p className="m-5">Year - Section : {item.year} - {item.section}</p>
                </div>
              ))
            )}
          </div>
        ) 
        : (
          <div className="flex flex-col items-center">
            {filteredTeacherLeaves.length === 0 ? (
              <div className="text-center my-20">
                <p className="text-2xl font-semibold text-black">
                  {filter === "All" ? "No records found" : `No ${filter.toLowerCase()} records found`}
                </p>
              </div>
            ) : (
              filteredTeacherLeaves.map((item) =>(
                <div key={item.id} className="bg-black text-white h-70 w-250 rounded-xl my-10 p-5">
                  <div className="flex justify-between">
                    <h1 className="text-3xl">{item.name}</h1>
                    <h1 className="text-2xl bg-white text-black p-2 rounded-full">{item.status}</h1>
                  </div>
                  <p className="text-xl m-5">{item.organization}</p>
                  <p className="m-5">Purpose  : {item.purpose}</p>
                  <p className="m-5">Year - Section : {item.year} - {item.section}</p>
                  {/* Fixed condition: check for lowercase "accepted" and "rejected" */}
                  {item.status !== "accepted" && item.status !== "rejected" && (
                    <div className="flex justify-center">
                      <div className="me-4">
                        <button className="bg-green-600 p-2 rounded-xl text-white hover:cursor-pointer" onClick={() => handleAccept(item.id)}>Give Leave</button>
                      </div>
                      <div>
                        <button className="bg-red-600 p-2 rounded-xl text-white hover:cursor-pointer" onClick={() => handleReject(item.id)}>Reject Leave</button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Page;