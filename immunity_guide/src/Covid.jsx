import React, { useState } from 'react';



import './elements.css'
import Virus from './virus'


export default function COVID({covidstyle}) {
    return (
        <>
            <div className='Element' style={covidstyle} >
                <div style={{ height: "25%" }}>
                    <h1 className='font1'>Monitoring</h1>
                    <h1 className='font2' style={{ transform: 'translateY(-80%)' }}>COVID</h1>
                </div>
                
                <div style={{ height: "80%", width: "100%", display: 'flex', transform: "translateY(-2.5vh)" }}>
                            <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                <h1 className="text6" style={{ transform: "translateY(1vh)" }}>COVID + Strains</h1>
                                    </div>

                                    <div style={{ width: '25%' }}>
                                        <Virus />
                                    </div>
                                </div>
                                <div className='container6'>
                            <p className="text7">A <span style={{ color: '#A72608' }}>virus</span> causes a mild cold to death.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Delta/Wuhan</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <Virus />
                                    </div>
                                </div>
                                <div className='container6'>
                            <p className="text7">The newest COVID strand, this <span style={{ color: '#A72608' }}>virus</span> is now the most dominant variant.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Omicron BA1</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <Virus />
                                    </div>
                                </div>
                                <div className='container6'>
                            <p className="text7">A sub variant of the COVID <span style={{ color: '#A72608' }}>virus</span> with 39 mutations.</p>

                                </div>
                            </div>
                            <div className="Square">
                                <div className='container5'>
                                    <div style={{ width: "75%" }}>
                                <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Omicron BA2</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <Virus />
                                    </div>
                                </div>
                                <div className='container6'>
                                    <p className="text7">A sub variant of the COVID <span style={{ color: '#A72608' }}>virus</span> with 39 mutations.</p>

                                </div>
                            </div>
                        </div>
                   
                </div>

        </>
    );
}