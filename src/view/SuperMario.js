import React from 'react'
import { Link } from 'react-router-dom'
import SMIDBanner from '../components/images/SMID-Banner.jpg'
import SMID1 from '../components/images/SMID-1.jpeg'
import SMID2 from '../components/images/SMID-2.jpeg'
import SMID3 from '../components/images/SMID-3.jpeg'
import SMID4 from '../components/images/SMID-4.jpeg'
import SMID5 from '../components/images/SMID-5.jpeg'



export default function SuperMario() {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark p-0" >
        <div className="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse row text-center" id="navbarNav">
            <div class="navbar-nav">
              <Link to={'/'} className='nav-link col-3'>Return home</Link>
            </div>
          </div>
        </div>
      </nav>
    <div className='smid-main py-5'>
      <div className='banner-div mb-5'>
        <img className='banner-img' src={SMIDBanner} />
      </div>
      <div className='row show-content'>
        <div className='show-info'>
          <h5>Premiering at the 2023 IndyFringe Festival, <em>Super Mario is Dead</em> is the newest fringe comedy-musical 
            from writing team Jordan Brown, Josh Brown, and Matt Day.  </h5>
          <p>Mario always had the spotlight in the Mushroom Kingdom.  But when he dies, his brother Luigi must see 
            if he has what it takes to be the hero and stop Waluigi, the latest guy with the super original idea of 
            taking over the world.  Many familiar faces and Easter Eggs (Yoshi Eggs?) are here for fans to recognize, 
            but this darkly comedic story puts them in places you've never seen them in before.  
            And did we mention that they sing?</p>
        </div>
        <div className='show-carousel'>
            <div className='carousel m-auto d-flex justify-content-center'>
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={SMID1} className="carousel-img d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={SMID2} className="carousel-img d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={SMID3} className="carousel-img d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={SMID4} className="carousel-img d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={SMID5} className="carousel-img d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
