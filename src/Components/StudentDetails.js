import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function StudentDetails() {
    const params = useParams()
    const[studentDetails,setStudenDetails]=useState({})
    const fetchStudentDetails=()=>{
        axios.get(`https://65773163197926adf62d9e6b.mockapi.io/Student/${params.id}`).then((res)=>{
            setStudenDetails(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchStudentDetails()
    },[])
  return (
    <div className='container w-50'><div class="card" >
    <div class="card-body">
      <h5 class="card-title">{studentDetails.firstName}{studentDetails.lastName}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails.email}</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div></div>
  )
}

export default StudentDetails