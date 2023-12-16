import React from 'react'

function Dashboard() {
    const data=[
        {
            name:"Primary Card",
            color:"primary",
        },
        {
            name:"Warning Card",
            color:"warning",
        },
        {
            name:"Success Card",
            color:"success",
        },
        {
            name:"Danger Card",
            color:"danger",
        },
    ]
  return (
    <>
    <div className='container w-80 m-auto'>
        <div className='row'>
            {data.map((card)=>{
                return <div className='col-3'>
                <div class={`card bg-${card.color}`} style={{width: "18rem;"}}>
      <div class="card-header">
        {card.name}
      </div>
      <ul class="list-group list-group-flush">
        <li class={`list-group-item bg-${card.color}`}>View Details</li>
       
      </ul>
    </div>
                </div>
            })}
            
        </div>
    </div>
    </>
  )
}

export default Dashboard