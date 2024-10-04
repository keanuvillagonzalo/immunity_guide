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
import Bacteria from './Bacteria';

export default function Pediatrics({ pediatricstyle }) {
    return (
        <>

            <div className='Element' style={pediatricstyle} >
                <div style={{ height: "25%" }}>
                    <h1 className='font1'>Monitoring</h1>
                    <h1 className='font2' style={{ transform: 'translateY(-80%)' }}>Pediatrics</h1>
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
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>HAV</h1>
                                    </div>
                                    
                                    <div style={{ width: '25%'}}>
                                        <Virus />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">HAV is a contagious liver <span style={{ color: '#A72608' }}>infection</span> caused typically spread through contaminated food.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Rotavirus</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <Virus />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Rotavirus is a very contagious <span style={{ color: '#A72608' }}>virus</span> that causes diarrhea.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Pertussis</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <Bacteria />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Pertussis is a highly contagious<span style={{ color: '#A72608' }}>bacterial</span> infection that affects the respiratory tract </p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Polio Virus</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <Virus />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">An illness caused by a <span style={{ color: '#A72608' }}>virus</span> that affects nerves in the spinal cord or brain stem.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Tetanus</h1>
                                    </div>
                                    <div style={{ width: "25%" }}>
                                        <Bacteria />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A serious disease of the nervous system caused by <span style={{ color: '#A72608' }}>bacterium</span>.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Meningococcal A</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <Bacteria />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A serious bacterial <span style={{ color: '#A72608' }}>infection</span> resulting in organ damage or death.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Meningococcal B</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <Bacteria />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A bacterial <span style={{ color: '#A72608' }}>infection</span> that causes meningitis and sepsis.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>H Influenza B</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <Bacteria />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A bacterial <span style={{ color: '#A72608' }}>infection</span> causing mild to severe causing various symptoms.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Pneumococcal</h1>
                                    </div>
                                    <div style={{ width: "25%" }}>
                                        <Bacteria />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A bacterial <span style={{ color: '#A72608' }}>infection</span> that can cause pneumonia, meningitis and sepsis.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Diphtheria</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <Bacteria />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A serious bacterial <span style={{ color: '#A72608' }}>infection</span> of mucous membranes within the nose and throat.</p>

                                </div>
                            </div>
                            
                            
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
