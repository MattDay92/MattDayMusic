import React from 'react'
import { Link } from 'react-router-dom'
import DifferentLensBanner from '../components/images/DifferentLens-Website-Banner.png'
import DifferentLensCover from '../components/images/Different-Lens-Album-Cover.webp'

export default function DifferentLens() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark p-0" >
        <div className="container-fluid navbar">
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
      <div className='differentlens-main'>
        <div>
          <img className='differentlens-banner' src={DifferentLensBanner} />
        </div>
        <div className='row show-content col-10 m-auto'>
          <div className='col-6 text-center'>
            <h5><em>Different Lens</em> is the first album by musical theatre composer/lyricist Matt Day.  Released in the summer of 2020,
              the album features songs from Paper Swords and Make Me A Match and features performances by some of Matt’s closest friends.</h5>
            <h4>Track List</h4>
            <p>1. "Our Hands Just Touched" from <em>Paper Swords</em></p>
            <p>2. "The Wine Song"</p>
            <p>3. "Ocean" from <em>Paper Swords</em></p>
            <p>4. "Show 'em What You Got Goin' On" from <em>Make Me A Match</em></p>
            <p>5. "The Next One" from <em>Paper Swords</em></p>
            <p>6. "Here Comes Me" from <em>Make Me A Match</em></p>
            <p>7. "Different Lens" from <em>Make Me A Match</em></p>
          </div>
          <div className='col-6 text-center my-auto'>
            <img className='show-cover' src={DifferentLensCover} />
          </div>
        </div>
        <div className='row m-auto col-6 py-5'>
          <iframe src="https://open.spotify.com/embed/album/3sksJeqTClei5SKFtYIGZH?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </>
  )
}
