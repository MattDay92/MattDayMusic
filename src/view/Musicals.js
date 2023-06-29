import React from 'react'
import { Link } from 'react-router-dom'
import PaperSwordsLogo from '../components/images/Paper-Swords-Square.webp'
import MMAMLogo from '../components/images/MMAM-IndyFringe-Square-01-2.webp'
import DifferentLensLogo from '../components/images/Different-Lens-Album-Cover.webp'
import ParkingLot from '../components/images/Parking-Lot-Square.png'


export default function Musicals() {
  return (
    <div className='main'>
        <h1 className='text-center'>Theatre</h1>
        <div className='row col-10 m-auto d-flex justify-content-center text-center'>
            <div className='col-3'>
                <Link to={'/paperswords'}><img src={PaperSwordsLogo} style={{width: '100%'}} /></Link>
                <h3>Paper Swords</h3>
            </div>
            <div className='col-3'>
                <Link to={'/makemeamatch'}><img src={MMAMLogo} style={{width: '100%'}} /></Link>
                <h3>Make Me A Match</h3>
            </div>
            <div className='col-3'>
                <Link to={'/supermarioisdead'}><img src={DifferentLensLogo} style={{width: '100%'}} /></Link>
                <h3>Super Mario is Dead</h3>
            </div>
            <div className='col-3'>
                <Link to={'/boymeetsmusical'}><img src={DifferentLensLogo} style={{width: '100%'}} /></Link>
                <h3>Boy Meets Musical</h3>
            </div>
        </div>
        <h1 className='text-center'>Other</h1>
        <div className='row col-10 m-auto d-flex justify-content-center text-center'>
            <div className='col-3'>
                <Link to={'/differentlens'}><img src={DifferentLensLogo} style={{width: '100%'}} /></Link>
                <h3>Different Lens</h3>
            </div>
            <div className='col-3'>
                <Link to={'/parkinglot'}><img src={ParkingLot} style={{width: '100%'}} /></Link>
                <h3>A Long Way from the Parking Lot</h3>
            </div>
        </div>
    </div>
  )
}
