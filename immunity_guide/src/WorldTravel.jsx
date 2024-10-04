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
import Parasite from './Parasite';

export default function WorldTravel({ worldstyle }) {
    return (
        <>

            <div className='Element' style={worldstyle} >
                <div style={{ height: "25%" }}>
                    <h1 className='font1'>Diagnostic</h1>
                    <h1 className='font2' style={{ transform: 'translateY(-80%)' }}>World Travel</h1>
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
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Dengue</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A mosquito-borne <span style={{ color: '#A72608' }}>virus</span> that is prevalent in tropical and subtropical areas.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Chikungunya</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Virus /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Chikungunya is a mosquito-borne <span style={{ color: '#A72608' }}>viral</span> disease.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "25%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Malaria</h1>
                                    </div>
                                    <div style={{ width: '50%' }}></div>
                                    <div style={{ width: '25%' }}>
                                        <Parasite /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">This disease is caused by a <span style={{ color: '#A72608' }}>parasite</span> spread through infected mosquitoes.</p>

                                </div>
                            </div>
                          
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Avian Flu</h1>
                                    </div>
                                   
                                    <div style={{ width: '25%' }}>
                                        <Virus /> </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Avian Flu is caused by influenza type A <span style={{ color: '#A72608' }}>virus</span> infections in bird species.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Yellow Fever</h1>
                                    </div>
                                    
                                    <div style={{ width: "25%" }}>
                                        <Virus /> </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Yellow fever is caused by a <span style={{ color: '#A72608' }}>virus</span> that is found in Africa and South America.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Typhoid Fever</h1>
                                    </div>
                                    
                                    <div style={{ width: '25%' }}>
                                        <Virus /></div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Typhoid fever, also called enteric fever, is a <span style={{ color: '#A72608' }}>virus</span> caused by salmonella bacteria.</p>

                                </div>
                            </div>
                           

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
