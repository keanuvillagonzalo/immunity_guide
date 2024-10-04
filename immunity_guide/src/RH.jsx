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
import Virus from './Virus'
import Protein from './Protein';
import Bacteria from './Bacteria';

export default function RH({ rhstyle  }) {
    return (
        <>

            <div className='Element' style={rhstyle} >
                <div style={{ height: "25%" }}>
                    <h1 className='font1'>Diagnostic</h1>
                    <h1 className='font2' style={{ transform: 'translateY(-80%)' }}>Rheumatology</h1>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{ transform: 'translateY(-10%)' }}               >
                    <SwiperSlide>
                        <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>ANA</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Protein />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className='text7'>A <a href="https://www.webmd.com/heart-disease/high-cholesterol-healthy-heart">blood</a> test that looks for certain kinds of <span style={{ color: '#A72608' }}>protein</span> in the body.</p>
                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>ENA</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Protein /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A blood test that checks for <span style={{ color: '#A72608' }}>proteins</span> in your blood.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>RF</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Protein />  </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Measures the <span style={{ color: '#A72608' }}>protein</span> in your blood that could attack healthy tissues.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>CCP</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Protein /> </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">CCP are a type of <span style={{ color: '#A72608' }}>protein</span> that target healthy tissues in the joints.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>14.3.3 eta</h1>
                                    </div>
                                    
                                    <div style={{ width: "25%" }}>
                                        <Bacteria /> </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A <span style={{ color: '#A72608' }}>protein</span> used to help monitor response to arthritis therapy.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Ab to Biologics</h1>
                                    </div>
                                    
                                    <div style={{ width: '25%' }}>
                                        <Protein /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A type of <span style={{ color: '#A72608' }}>protein</span> used  as in medical therapy.</p>

                                </div>
                            </div>
                          

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
