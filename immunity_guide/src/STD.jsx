import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules
import { Pagination, Navigation, Controller } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './elements.css'
import Virus from './virus'

export default function STD({stdstyle }) { 
    return (
        <>
            
            <div className='Element' style={stdstyle } >
                <div style={{ height: "25%" }}>
                    <h1 className='font1'>Monitoring</h1>
                    <h1 className='font2' style={{transform: 'translateY(-80%)'} }>STD</h1>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{transform: 'translateY(-10%)'} }               >
                <SwiperSlide>
                <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                    <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{width: "25%"} }>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>HIV</h1>
                                    </div>
                                    <div style={{width: '50%'} }></div>
                                    <div style={{width: '25%'} }>
                                   <Virus />
                                    </div>
                        </div>
                        <div className='container6'>
                            <p className="text7">HIV is a <span style={{ color: '#A72608' }}>virus</span> that causes AIDS by infecting and destroying immune cells.</p>

                        </div>
                    </div>
                    <div className="Square">
                        <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>HPV</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus /></div>
                        </div>
                        <div className='container6'>
                            <p className="text7">HPV <span style={{ color: '#A72608' }}>virus</span> is a viral infection that causes skin or mucous membrane growths.</p>

                        </div>
                    </div>
                    <div className="Square">
                        <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>HBV</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus />  </div>
                        </div>
                        <div className='container6'>
                            <p className="text7">Hepatitis B is a serious liver infection caused by the hepatitis B <span style={{ color: '#A72608' }}>virus</span> (HBV).</p>

                        </div>
                    </div>
                    <div className="Square">
                        <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>HCV</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus /> </div>
                        </div>
                        <div className='container6'>
                            <p className="text7">Hepatitis C is a <span style={{ color: '#A72608' }}>viral</span> infection that causes liver inflammation.</p>

                        </div>
                    </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{width: "25%"} }>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Chlamidya</h1>
                                    </div>
                                    <div style={{ width: "50%" }}></div>
                                    <div style={{width: "25%"} }>
                                        <Virus /> </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Chlamidya is a <span style={{ color: '#A72608' }}>virus</span> that can cause genital pain and discharge.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Gonorrhea</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Gonorrhea is a <span style={{ color: '#A72608' }}>virus</span> that can cause urinary pain, swelling, and discharge.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Syphilis</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">This <span style={{ color: '#A72608' }}>virus</span> manifests as sores on the genitals, rectum or mouth.</p>

                                </div>
                            </div>
                            
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
