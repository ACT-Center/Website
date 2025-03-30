import React, { useState } from 'react'
import "./NavBar.css"
import { Outlet, Link } from 'react-router-dom';
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

    return (
        <>
        <div className="mobileMenu" style={{display: isMobile}}>
            <div className="mobileMenuTopBar">
                <span class="material-symbols-outlined" onClick={() => {mobileNavHandle()}}>cancel</span>
            </div>
            <div className="mobileMenuMenu">
                <a className='ourNavMenuItem' href='/'>Home</a>
                <a className='ourNavMenuItem' href='/about'>About</a>
                <a className='ourNavMenuItem' href='resources'>Resources</a>
                <a className='ourNavMenuItem' href='/submission'>Submissions</a>
                <a className='ourNavMenuItem' href='/guidelines'>Guidelines</a>
                {/* <a className='ourNavMenuItem' href='/support'>Support</a> */}
                <a className='ourNavMenuItem' href='/evaluation'>Evaluation</a>
                <a className='ourNavMenuItem' href='/contact'>Contact</a>
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
                <a className='ourNavMenuItem' href='/'>Home</a>
                <a className='ourNavMenuItem' href='/about'>About</a>
                <a className='ourNavMenuItem' href='resources'>Resources</a>
                <a className='ourNavMenuItem' href='/submission'>Submissions</a>
                <a className='ourNavMenuItem' href='/submission'>Projects</a>
                <a className='ourNavMenuItem' href='/submission'>Openings</a>
                {/* <a className='ourNavMenuItem' href='/guidelines'>Guidelines</a> */}
                {/* <a className='ourNavMenuItem' href='/support'>Support</a> */}
                {/* <a className='ourNavMenuItem' href='/evaluation'>Evaluation</a> */}
                <a className='ourNavMenuItem' href='/contact'>Contact</a>
            </div>
        </div>
        </>
    )
}
