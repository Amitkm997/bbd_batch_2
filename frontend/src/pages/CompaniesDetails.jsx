import React from 'react'

import { companies } from './Companies';
import { useParams } from 'react-router-dom'
export default function CompaniesDetails() {
    const{id}=useParams();
    console.log(id);

    const company=companies.find((item)=>item.id==id);
    console.log(company)
  return (
    <div>
      <h1>Company details</h1>
      <h3>{company.companyName}</h3>
    </div>
  )
}
