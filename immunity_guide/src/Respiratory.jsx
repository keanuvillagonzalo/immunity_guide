
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

export default function Respiratory({ respiratorystyle }) {
    return (
        <>

            <div className='Element' style={respiratorystyle} >
                <div style={{ height: "25%" }}>
                    <h1 className='font1'>Monitoring</h1>
                    <h1 className='font2' style={{ transform: 'translateY(-80%)' }}>Respiratory</h1>
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
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Influenza</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A <span style={{ color: '#A72608' }}>viral</span> infection of the nose, throat, and lungs.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>SARS</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Severe acute respiratory syndrome is a contagious and sometimes fatal <span style={{ color: '#A72608' }}>viral</span> illness.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>RSV</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus />  </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Respiratory syncytia <span style={{ color: '#A72608' }}>virus</span> (RSV) causes infections of the lungs and respiratory tract.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Varicella</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus /> </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Varicella (Chickenpox) is an illness caused by the varicella-zoster <span style={{ color: '#A72608' }}>virus</span></p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Pneumovax</h1>
                                    </div>
                                    <div style={{ width: "50%" }}></div>
                                    <div style={{ width: "25%" }}>
                                        <Virus /> </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A <span style={{ color: '#A72608' }}>virus</span> that can cause infections in blood, brain, and lung.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Adeno</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A group of <span style={{ color: '#A72608' }}>viruses</span> that can cause mild to severe infection throughout your body.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Parainfluenza</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A <span style={{ color: '#A72608' }}>virus</span> causing respiratory infections like colds, croup, and bronchiolitis.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Human<br />Metapneumovirus</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A <span style={{ color: '#A72608' }}>virus</span> that can cause respiratory disease.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
