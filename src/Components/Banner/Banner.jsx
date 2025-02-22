import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Styles.css';
import image1 from "../../assets/6212860 (1).jpg";
import image2 from "../../assets/gameing.jpg";
import image3 from "../../assets/Rk8hoBXHBEYK96gZXdfDdc.jpg";
import image4 from "../../assets/2390837.webp";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='my-2'>
           <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="banner-slide">
                        <img src={image1} alt=""/>
                        <div className="banner-text">
                            <h1>EGYPT AND WORLD</h1>
                            <p>Consectetuer adipiscing elit, send diam nonummy nibh eulsmod tincidunt dolare magna aliquam erat volutpat.</p>
                            <div className="banner-buttons">
                                <button className="details-btn">GAME DETAILS</button>
                                <button className="buy-btn">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="banner-slide">
                        <img src={image2} alt=""/>
                        <div className="banner-text">
                            <h1>Gaming Universe</h1>
                            <p>Discover the most exciting gaming adventures of all time!</p>
                            <div className="banner-buttons">
                                <button className="details-btn">GAME DETAILS</button>
                                <button className="buy-btn">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="banner-slide">
                        <img src={image3} alt=""/>
                        <div className="banner-text">
                            <h1>Next-Gen Graphics</h1>
                            <p>Experience ultra-realistic visuals in gaming.</p>
                            <div className="banner-buttons">
                                <button className="details-btn">GAME DETAILS</button>
                                <button className="buy-btn">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="banner-slide">
                        <img src={image4} alt=""/>
                        <div className="banner-text">
                            <h1>Epic Adventures Await</h1>
                            <p>Explore breathtaking gaming experiences.</p>
                            <div className="banner-buttons">
                                <button className="details-btn">GAME DETAILS</button>
                                <button className="buy-btn">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
