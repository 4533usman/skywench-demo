import React from 'react'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FenceOutlinedIcon from '@mui/icons-material/FenceOutlined';
import image from '../../assets/download.jpeg'
import './Gallery.css'

function Gallery() {
    return (
        <div className='container'>
            <div className='row my-3'>
                <div className='col-md-3  p-3'>
                    <div className='bg-light rounded-4 p-3 d-flex flex-column gap-3'>
                        <div className='d-flex gap-2'>
                            <AddLocationAltIcon />
                            <p className='h5'>Destination</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <AddLocationAltIcon />
                            <p className='h5'>Explore Travelers</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <AddLocationAltIcon />
                            <p className='h5'>Travel Mates</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <AddLocationAltIcon />
                            <p className='h5'>Drop a Pin</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <AddLocationAltIcon />
                            <p className='h5'>Travel portfolio</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-9 p-3'>
                    <div className='bg-light rounded-4 p-3  d-flex flex-wrap gap-1'>
                        <p className='text-sm  px-3 py-1 rounded-4 bg-cl'><b>Travel Mates: <span className='text-primary'><b>234</b></span></b></p>
                        <p className='text-sm  px-3 py-1 rounded-4 bg-cl'><b>City Visited: <span className='text-primary'><b>234</b></span></b></p>
                        <p className='text-sm  px-3 py-1 rounded-4 bg-cl'><b>Followers: <span className='text-primary'><b>234</b></span></b></p>
                        <p className='text-sm  px-3 py-1 rounded-4 bg-cl'><b>Countries: <span className='text-primary'><b>234</b></span></b></p>
                        <p className='text-sm px-3 py-1 rounded-4 bg-cl'><b>Continent Visited: <span className='text-primary'><b>234</b></span></b></p>
                        <p className='text-sm  px-3 py-1 rounded-4 bg-cl'><b>Pins Dropped: <span className='text-primary'><b>234</b></span></b></p>
                    </div>
                    <div className='row my-2 d-flex align-items-center p-3'>
                        <div className='col-md-5 position-relative my-1'>
                            <SearchOutlinedIcon className='position-absolute top-0 start-0 searchBarIcon' />
                            <input className='input w-100 ' placeholder='Search' />
                        </div>
                        <div className='col-md-6 position-relative my-1'>
                            <FenceOutlinedIcon className='position-absolute top-0 start-0 searchBarIcon' />
                            <input className='input w-100 ' placeholder='Search' />

                        </div>
                        <div className='col-md-1'>
                            <button className='btn  btn-primary rounded-5 py-2'>Search</button>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-md-3 p-2'>
                            <div class=" d-flex flex-column gap-3">
                                <img src={image} className="rounded-5 gallery-img" alt="..." />
                                <p className='h5'>Food</p>
                            </div>
                        </div>
                        <div className='col-md-3  p-2'>
                            <div class=" d-flex flex-column gap-3">
                                <img src={image} className="rounded-5 gallery-img" alt="..." />
                                <p className='h5'>Bars</p>
                            </div>
                        </div>
                        <div className='col-md-3  p-2'>
                            <div class="d-flex flex-column gap-3">
                                <img src={image} className="rounded-5 gallery-img" alt="..." />
                                <p className='h5'>Hotels</p>
                            </div>
                        </div>
                        <div className='col-md-3  p-2'>
                            <div class="d-flex flex-column gap-3">
                                <img src={image} className="rounded-5 gallery-img" alt="..." />
                                <p className='h5'>Nature</p>
                            </div>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-md-3 p-2'>
                            <div class=" d-flex flex-column gap-3">
                                <img src={image} className="rounded-5 gallery-img" alt="..." />
                                <p className='h5'>GYM</p>
                            </div>
                        </div>
                        <div className='col-md-3  p-2'>
                            <div class=" d-flex flex-column gap-3">
                                <img src={image} className="rounded-5 gallery-img" alt="..." />
                                <p className='h5'>Shoppings</p>
                            </div>
                        </div>
                        <div className='col-md-3  p-2'>
                            <div class="d-flex flex-column gap-3">
                                <img src={image} className="rounded-5 gallery-img" alt="..." />
                                <p className='h5'>Beaches</p>
                            </div>
                        </div>
                        <div className='col-md-3  p-2'>
                            <div class="d-flex flex-column gap-3">
                                <img src={image} className="rounded-5 gallery-img" alt="..." />
                                <p className='h5'>Club</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery