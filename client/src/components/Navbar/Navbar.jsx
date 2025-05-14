import React, { useState } from 'react'
import "./NavBar.css"
import logo from "../../assets/logo.webp"

export default function NavBar() {

    const [isMobile, setIsMobile] = useState('none');
    function mobileNavHandle(){
        if (isMobile == 'block') {
            setIsMobile('none')
        }
        else{
            setIsMobile('block')
        }
    }

    function NavMenuItems(){
        return(
            <>
                <a className='ourNavMenuItem' href='/'>Home</a>
                <a className='ourNavMenuItem' href='/about'>About</a>
                <a className='ourNavMenuItem' href='resources'>Resources</a>
                <a className='ourNavMenuItem' href='/submission'>Submissions</a>
                <a className='ourNavMenuItem' href='/Projects'>Projects</a>
                <a className='ourNavMenuItem' href='/Openings'>Openings</a>
                {/* <a className='ourNavMenuItem' href='/guidelines'>Guidelines</a> */}
                {/* <a className='ourNavMenuItem' href='/support'>Support</a> */}
                {/* <a className='ourNavMenuItem' href='/evaluation'>Evaluation</a> */}
                <a className='ourNavMenuItem' href='/contact'>Contact</a>
            </>
        )
    }

    return (
        <>
        <div className="mobileMenu" style={{display: isMobile}}>
            <div className="mobileMenuTopBar">
                <span class="material-symbols-outlined" onClick={() => {mobileNavHandle()}}>cancel</span>
            </div>
            <div className="mobileMenuMenu">
                <NavMenuItems/>
            </div>
        </div>
        <div className='ourNavbar navbar-expand-lg'>
            <div className="logo">
                <img src={logo} alt="" />
                ACT CENTRE
            </div>
            <div className="hamburgerCont" onClick={() => {mobileNavHandle()}}>
                <span class="material-symbols-outlined">menu</span>
            </div>
            <div className="ourNavMenu">
                <NavMenuItems/>
            </div>
        </div>
        </>
    )
}
