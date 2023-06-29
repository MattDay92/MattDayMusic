import React from 'react'
import { Link } from 'react-router-dom'
import SMIDBanner from '../components/images/SMID-Banner.jpg'

export default function SuperMario() {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark p-0" >
        <div className="container-fluid navbar">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse row text-center" id="navbarNav">
            <div class="navbar-nav">
              <Link to={'/'} className='nav-link col-3'>Visit mattdaymusic.net</Link>
            </div>
          </div>
        </div>
      </nav>
    <div className='smid-main py-5'>
      <div className='banner-div'>
        <img className='banner-img' src={SMIDBanner} />
      </div>
      <div className='row show-content col-10 m-auto'>
        <div className='col-6 text-center'>
          <h5>Premiering at the 2023 IndyFringe Festival, <em>Super Mario is Dead</em> is the newest fringe comedy-musical 
            from writing team Jordan Brown, Josh Brown, and Matt Day.  </h5>
          <p>Mario always had the spotlight in the Mushroom Kingdom.  But when he dies, his brother Luigi must see 
            if he has what it takes to be the hero and stop Waluigi, the latest guy with the super original idea of 
            taking over the world.  Many familiar faces and Easter Eggs (Yoshi Eggs?) are here for fans to recognize, 
            but this darkly comedic story puts them in places you've never seen them in before.  
            And did we mention that they sing?</p>
        </div>
        <div className='col-6 text-center my-auto'>
          <h3>Tickets available soon!</h3>
          <button className='btn btn-success' disabled>Tickets</button>
        </div>
      </div>
    </div>
    </>
  )
}
