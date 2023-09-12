import React from 'react'
import { Link } from 'react-router-dom'
import MMAMBanner from '../components/images/MMAM-Website-Banner.png'
import MMAM1 from '../components/images/MMAM-1.jpeg'
import MMAM2 from '../components/images/MMAM-2.jpeg'
import MMAM3 from '../components/images/MMAM-3.jpeg'

export default function MakeMeAMatch() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark p-0" >
        <div className="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse row text-center" id="navbarNav">
            <div class="navbar-nav">
              <Link to={'/'} className='nav-link col-3'>Return Home</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className='mmam-main'>
        <div className='banner-div'>
          <img className='mmam-banner' src={MMAMBanner} />
        </div>
        <div className='row show-content'>
          <div className='show-info'>
            <h5><em>Make Me a Match</em>, with music and lyrics by Matt Day and a book by Jordan Brown and Josh Brown, was the Audience
              Choice Award Winner at the 2019 IndyFringe Festival</h5>
            <p>On the set of America’s favorite dating show, Make Me a Match, young intern Meredith is content with
              her job until she discovers the true character of the beloved host, Danny Sharp. Teaming up with her
              coworker, Lexi, they work together to bring him down once and for all. </p>
          </div>
          <div className='show-carousel'>
            <div className='carousel m-auto d-flex justify-content-center'>
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={MMAM1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={MMAM2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={MMAM3} className="d-block w-100" alt="..." />
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
        <div className='show-videos py-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hc_kjLdw0e0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7AjRzQ_GHQE?si=KBhl03sPZ66gyS0i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
      </div>
    </>
  )
}
