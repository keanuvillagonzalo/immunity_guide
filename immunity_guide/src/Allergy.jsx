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
import AllergyIcon from './AllergyIcon'

export default function Allergy({ allergystyle }) {
    return (
        <>

            <div className='Element' style={allergystyle} >
                <div style={{ height: "25%" }}>
                    <h1 className='font1'>Diagnostic</h1>
                    <h1 className='font2' style={{ transform: 'translateY(-80%)' }}>Allergy</h1>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{ transform: 'translateY(-10%)' }}  >
                    <SwiperSlide>
                        <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Peanut</h1>
                                    </div>

                                    <div style={{ width: '25%' }}>
                                        <AllergyIcon />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Peanut <span style={{ color: '#A72608' }}>allergy</span> is one of the most common causes of severe allergy attacks.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Almond</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <AllergyIcon />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">An almond <span style={{ color: '#A72608' }}>allergy</span> is a set of symptoms caused by being in contact with almonds.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Cow Milk</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <AllergyIcon />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Cow's milk <span style={{ color: '#A72608' }}>allergy</span> is an allergic reaction to the protein found in cow's milk.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Egg Whites</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <AllergyIcon />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Eggs are one of the most common <span style={{ color: '#A72608' }}>allergy</span>-causing foods for children.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Egg Yolk</h1>
                                    </div>
                                    <div style={{ width: "25%" }}>
                                        <AllergyIcon />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Egg Yolk <span style={{ color: '#A72608' }}>allergy</span> can occur minutes to hours after eating any food withe eggs.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Shrimp</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <AllergyIcon />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A typical <span style={{ color: '#A72608' }}>allergic</span> reaction by the body's immune system to proteins in shrimp.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Soy</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <AllergyIcon />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A soy allergy <span style={{ color: '#A72608' }}>allergy</span> is when your body reacts to soy protein.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Tuna</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <AllergyIcon />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Fish <span style={{ color: '#A72608' }}>allergies</span> are primarily caused by parvalbumins, a type of calcium-binding protein</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ height: "80%", width: "100%", display: 'flex' }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                        <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Wheat</h1>
                                    </div>
                                    <div style={{ width: "25%" }}>
                                        <AllergyIcon />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">Wheat allergy is an <span style={{ color: '#A72608' }}>allergic</span> reaction to foods containing wheat.</p>

                                </div>
                            </div>
                            


                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
