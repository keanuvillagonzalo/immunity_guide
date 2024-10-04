
import './elements.css'
import Protein from './Protein'
import Bacteria from './Bacteria'

export default function OB({obstyle}) {
    return (<>
        <div className='Element' style={obstyle} >
            <div style={{ height: "25%" }}>
                <h1 className='font1'>Diagnostic</h1>
                <h1 className='font2' style={{ transform: 'translateY(-80%)' }}>OB</h1>
            </div>
               <div style={{ height: "80%", width: "100%", display: 'flex', transform: "translateY(-2.5vh)" }}>
                    <div className="Square" style={{ borderLeft: "5px solid #D9D9D9" }}>
                        <div className='container5'>
                            <div style={{ width: "75%" }}>
                            <h1 className="text6" style={{ transform: "translateY(1vh)" }}>RH Factor</h1>
                            </div>

                            <div style={{ width: '25%' }}>
                                <Protein />
                            </div>
                        </div>
                        <div className='container6'>
                        <p className="text7">Rh factor is an inherited <span style={{ color: '#A72608' }}>protein</span> found on the surface of red blood cells.</p>

                        </div>
                    </div>
                    <div className="Square">
                        <div className='container5'>
                            <div style={{ width: "75%" }}>
                            <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Grp B Strep</h1>
                            </div>
                            <div style={{ width: '25%' }}>
                                <Bacteria />
                            </div>
                        </div>
                        <div className='container6'>
                        <p className="text7">A common <span style={{ color: '#A72608' }}>bacterium</span> often carried in the intestines or lower genital tract.</p>

                        </div>
                    </div>
                    <div className="Square">
                        <div className='container5'>
                            <div style={{ width: "75%" }}>
                            <h1 className="text6" style={{ transform: "translateY(1vh)" }}>Toxoplasmosis</h1>
                            </div>
                            <div style={{ width: '25%' }}>
                                <Bacteria />
                            </div>
                        </div>
                        <div className='container6'>
                        <p className="text7">A <span style={{ color: '#A72608' }}>bacteria</span> infection with a parasite called Toxoplasma gondii.</p>

                        </div>
                    </div>
                    
                </div>

            </div>

            

    </>
    );
}