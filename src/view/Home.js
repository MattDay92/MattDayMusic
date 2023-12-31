import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../components/images/Banner-Background.jpg'
import Headshot from '../components/images/HeadshotLeaning.png'
import School_Headshot from '../components/images/Headshot.jpg'
import ParkingLot from '../components/images/ParkingLot.png'
import PaperSwordsLogo from '../components/images/PaperSwords-Square.png'
import MMAMLogo from '../components/images/MMAM-IndyFringe-Square-01-2.webp'
import DifferentLensLogo from '../components/images/Different-Lens-Album-Cover.webp'
import SMIDLogo from '../components/images/SMIDIGPost-Square.png'
import SMIDBanner from '../components/images/SMID-Banner.jpg'
import * as Scroll from 'react-scroll';


export default function Home() {

    let LinkScroll = Scroll.Link;


    return (
        <>
            <nav className="navbar navbar-expand-md p-0" >
                <div className="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse row text-center" id="navbarNavDropdown">
                        <div class="navbar-nav">
                            <LinkScroll to="hero" spy={true} smooth={true} duration={500} className="nav-link col-3" >Matt Day</LinkScroll >
                            <LinkScroll to="featured" spy={true} smooth={true} duration={500} className="nav-link col-3" >Super Mario is Dead</LinkScroll >
                            <LinkScroll to="about" spy={true} smooth={true} duration={500} className="nav-link col-3" >About</LinkScroll >
                            <LinkScroll to="shows" spy={true} smooth={true} duration={500} className="nav-link col-3" >Works</LinkScroll >
                        </div>
                    </div>
                </div>
            </nav>
            <div className='main'>
                <div id='hero' className='row hero-container'>
                    <img className='banner' src={Background} />
                    <div className='hero-box'>
                        <h1 className='hero-title'>Matt Day | Composer/Lyricist</h1>
                    </div>
                    <div>
                        <img className='hero-image' src={Headshot} />
                    </div>
                </div>

                <div id='featured' className='smid-main-home'>
                    <div className='banner-div'>
                        <img className='banner-img' src={SMIDBanner} />
                    </div>
                    <div className='row show-content'>
                        <div className='featured-content'>
                            <h5>Premiering at the 2023 IndyFringe Festival, <em>Super Mario is Dead</em> is the newest fringe comedy-musical
                                from writing team Jordan Brown, Josh Brown, and Matt Day.  </h5>
                            <p>Mario always had the spotlight in the Mushroom Kingdom.  But when he dies, his brother Luigi must see
                                if he has what it takes to be the hero and stop Waluigi, the latest guy with the super original idea of
                                taking over the world.  Many familiar faces and Easter Eggs (Yoshi Eggs?) are here for fans to recognize,
                                but this darkly comedic story puts them in places you've never seen them in before.
                                And did we mention that they sing?</p>
                        </div>
                        <div className='featured-content-2 my-auto'>
                            <h3>"The quintessential fringe production"</h3>
                            <h4>- Lisa Gauthier Mitchison, NUVO</h4>
                            <h2 className='mt-5'>Original Cast Recording Coming Soon!</h2>
                        </div>
                    </div>
                </div>
                <div id='about' className='about'>
                    <div className='text-center my-5'>
                        <h1>About Matt</h1>
                    </div>
                    <div className='d-flex justify-content-around align-items-center my-5' >
                        <div className='about-headshot-div'><img className='about-headshot' src={ParkingLot} /></div>
                        <div className='about-content'>
                            <div>
                                Matt Day is a musical theatre composer/lyricist and professional guitarist currently based out of Indianapolis, IN.
                                After graduating from Indiana University, he began work on composing his first musical,
                                <em> Paper Swords</em>, which was an award winner at the 2020 Chicago Musical Theatre Festival.  Matt’s other work includes <em>Make Me A Match</em>,
                                which won the 2019 IndyFringe Audience Choice Award, <em>Super Mario is Dead</em>, premiering at the 2023 IndyFringe Festival, and a few
                                other projects still in early development.  His work has also been accepted to various cabarets
                                including the Allen and Grey New Voices Concert, the Latest Draft Podcast, and the Under the Arch Incubator in St. Louis, MO.
                                Matt's first album, Different Lens, containing songs from <em>Paper Swords</em> and <em>Make Me A Match</em> is available on Spotify, Apple Music, Napster
                                and anywhere else you want to look.
                            </div>
                            <div className='d-flex justify-content-around'>
                                <a href='https://www.instagram.com/mattday92' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                                <a href='https://www.youtube.com/@mattday5449' target='_blank'><i class="fa-brands fa-youtube"></i></a>
                                <a href='https://www.tiktok.com/@mattday92' target='_blank'><i className="fa-brands fa-tiktok"></i></a>
                                <a href='https://www.twitter.com/mattday92' target='_blank'><i className="fa-brands fa-twitter"></i></a>
                                <a href='https://open.spotify.com/artist/6PiAIZaF02pP1JNO58yt1H?si=MDPWHRPwTlKKlpvpn-gyvg' target='_blank'><i className="fa-brands fa-spotify"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='shows' className='shows'>
                    <div className='text-center my-5'>
                        <h1>Works</h1>
                    </div>
                    <div className='show-btns'>
                        <Link to={'/paperswords'} className='show-btn'><img className='show-logo' src={PaperSwordsLogo} /></Link>
                        <Link to={'/makemeamatch'} className='show-btn'><img className='show-logo' src={MMAMLogo} /></Link>
                        <Link to={'/differentlens'} className='show-btn'><img className='show-logo' src={DifferentLensLogo} /></Link>
                        <Link to={'/supermarioisdead'} className='show-btn'><img className='show-logo' src={SMIDLogo} /></Link>

                    </div>
                </div>
                {/* <div id='media' className='media'>
                    <div className='text-center my-5'>
                        <h1>Media</h1>
                    </div>
                    <div className='col-10 d-flex justify-content-between m-auto my-5'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7AjRzQ_GHQE?si=KBhl03sPZ66gyS0i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/jXjsDB1S3kw?si=WtE6cFRECLynIeLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7lkyQppboeg?si=pQI2Uqvexksx4RIz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div> */}

            </div>
        </>
    )
}
