import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../Context/UseContext'

function Navbar() {
  const value = useContext(UserContext)
  return (<><nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{value}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link to={'/'}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li></Link>
        <Link to={'/dashboard'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        </Link>
        <Link to={'/price'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Price</a>
        </li></Link>
        <Link to={'/form'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Form</a>
        </li></Link>
        <Link to={'/studentlist'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Studentlist</a>
        </li></Link>
        <Link to={'/Settings'}>
          <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Settings</a>
        </li></Link>
        
      </ul>
    </div>
  </div>
</nav></>)
}

export default Navbar