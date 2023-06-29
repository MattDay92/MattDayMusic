import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-0" >
                <div className="container-fluid navbar">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item left-nav">
                                <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/supermarioisdead'}>Super Mario is Dead</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/about'}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/musicals'}>Musicals</Link>
                            </li>
                            <li class="nav-item dropdown right-nav">
                                <Link class="nav-link" to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
