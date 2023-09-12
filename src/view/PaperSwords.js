import React from 'react'
import { Link } from 'react-router-dom'
import PSBanner from '../components/images/Paper-Swords-Website-Banner.png'
import PS1 from '../components/images/PS-1.jpg'
import PS2 from '../components/images/PS-2.jpg'
import PS3 from '../components/images/PS-3.jpg'

export default function PaperSwords() {
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
      <div className='ps-main'>
        <div className='banner-div'>
          <img className='banner-img' src={PSBanner} />
        </div>
        <div className='row show-content'>
          <div className='show-info'>
            <h5><em>Paper Swords</em>, with music and lyrics by Matt Day and a book by Kelsey Nighthawk, premiered at the 2018 IndyFringe Festival
              and was an award winner the 2020 Chicago Musical Theater Festival.</h5>
            <p><em>Paper Swords</em> is a romantic comedy musical, focusing on two groups of live action role-players (LARPers)
              as they navigate adolescence. When the king announces his retirement, the teenagers and the kingdom of Eloren
              are thrown into shambles. To determine the next ruler of the land, the knights of competing teams Ferndrey
              and Silvermore must battle one another for the throne. </p>
          </div>
          <div className='show-carousel'>
            <div className='carousel m-auto d-flex justify-content-center'>
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={PS1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={PS2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={PS3} className="d-block w-100" alt="..." />
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
          <div className='show-videos py-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6P6nx044l-8" title="We Are Knights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jXjsDB1S3kw?si=WtE6cFRECLynIeLo" title="Believe in Me" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
