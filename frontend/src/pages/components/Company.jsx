import React, { useEffect, useState } from 'react'
import {companies} from '../Companies'
import CompanyCard from '../CompanyCard'
export default function Company() {
   const[filteredList,setFilteredList]=useState([])
   const[search,setSearch]=useState("");
   // console.log(search)
   useEffect(()=>{
      let result=companies.filter((company)=>company.companyName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      setFilteredList(result);
   },[search])

  return (
     <section className='bg-gray-100 py-16'>
         {/* Top Hiring Comapanies  */}
            <div className='max-w-7xl mx-auto px-6'>
              <h2 className='text-3xl font-bold text-center mb-10'>Top Hiring Comanies</h2>
              <input type="text" 
              placeholder='Search Company...' 
              value={search} 
              onChange={(e)=>setSearch(e.target.value)}/>
              <div className='grid md:grid-cols-3 gap-6'>
                {/* <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
                <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
                <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" /> */}
                {filteredList.map((cur)=>{
                   return <CompanyCard key={cur.id}  id={cur.id} name={cur.companyName} role={cur.role} salaryPackage={cur.salaryPackage}/>
                })}
              </div>
    
            </div>
           </section>
  )
}
