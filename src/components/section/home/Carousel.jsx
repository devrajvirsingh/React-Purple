import React from 'react'
import './carousel.css'
import Featured from './Featured'
import Combos from './Combos'
import Bestseller from './Bestseller'
const Carousel = () => {
    return (
        <div className='section'>
            <div className="carousel-container mx-auto my-2">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699941921_header_web-26.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699938156_ubtan-range-banner-2gv-ubtan-range-web-banner.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699952517_global_store_pink-2596x836-3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699606541_1298x418-30.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699766136_minimalist_new-2596x836.jpeg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699602933_exclusivestamp01_hpweb.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699766130_dot_and_key_red-yellow-2596x836.jpeg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699687244_lakme_kajal_4shades-2596x836-3.jpeg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="categories my-5">
                    <img src="https://media6.ppl-media.com/tr:w-427,ar-433-100,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699274752_untitled-1_01.jpg" alt="" className='categories-image' />
                    <img src="https://media6.ppl-media.com/tr:w-427,ar-433-100,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699274753_untitled-1_02.jpg" alt="" className='categories-image' />
                    <img src="https://media6.ppl-media.com/tr:w-427,ar-433-100,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699274753_untitled-1_03.jpg" alt="" className='categories-image' />
                </div>
                <Featured />
                <div className="store my-4">
                    <img src="https://media6.ppl-media.com/tr:w-640,ar-64-13,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699619637_99_livenow_web-2.jpg" alt="" className='store-img' />
                    <img src="https://media6.ppl-media.com/tr:w-640,ar-64-13,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699619636_199_livenow_web-2.jpg" alt="" className='store-img' />
                    <img src="https://media6.ppl-media.com/tr:w-640,ar-320-69,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1698765522_99-199-299-499-slice-web_03.jpg" alt="" className='store-img' />
                    <img src="https://media6.ppl-media.com/tr:w-640,ar-320-69,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1698765523_99-199-299-499-slice-web_04.jpg" alt="" className='store-img' />
                </div>

                <div className="carousel-container2  mx-auto my-2">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1698746797_ft_appfirst_web.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1698996218_ft_freegift_web-sku-1.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>

                <div className="carousel-container2  mx-auto my-4">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1698771413_lakme_makeup_web.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699426630_winterstore_web.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1698771413_lakme_makeup_web.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1699017210_body-lotion-web.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>
                <Combos/>
                <Bestseller/>
            </div>

        </div>
    )
}

export default Carousel