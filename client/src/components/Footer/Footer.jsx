import React from 'react'
import "./Footer.css"
import tiet from "../../assets/tiet.png"
import tslas from "../../assets/tslas.png"

export default function Footer() {
    let copyright = String.fromCodePoint(0x00A9);
  return (
    <>
    <div className='footer'>
        
        {/* <div className="sideElement"></div> */}

        <div className="footerColumn">
            <h3>ACT CENTRE</h3>
            <p>Thapar School of Liberal Art and Sciences (TSLAS)</p>
            <p>Transdisciplinary collaboration is not just encouraged <br /> but embedded in our educational and research culture</p>
            <br />
            <p>Reach out to us at: act@thapar.edu</p>
        </div>
        <div className="footerColumn">
            <h3>Quick Links</h3>
            <div>
                <p><a href="/">Home</a></p>
                <p><a href="/about">About</a></p>
                <p><a href="/resources">Resources</a></p>
                <p><a href="/submission">Submissions</a></p>
                {/* <p><a href="">Support</a></p> */}
                <p><a href="/evaluation">Evaluations</a></p>
                <p><a href="/people">People</a></p>
                <p><a href="/contact">Contact</a></p>
                <p><a href="/biblo">Biblography</a></p>
            </div>
        </div>
        <div className="footerColumn">
            <h3>Visit Us</h3>
            <p>
            Thapar School of Liberal Art and Sciences <br />
            Thapar Institute of Engineering and Technology, <br />
            Bhadson Rd, Adarsh Nagar, <br />
            Patiala, Punjab 147004
            </p>
            
            <div className="footerLogos">
                <img src={tiet} alt="" />
                <img src={tslas} alt="" />
            </div>
        </div>

    </div>

    <div className="subfooter">
        <p>{copyright} Thapar Institute of Engineering and Technology</p>
    </div>
    </>
  )
}
