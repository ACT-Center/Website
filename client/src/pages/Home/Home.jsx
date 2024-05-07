import React from 'react'
import "./Home.css"

import Health from "./Assets/Health.png"
import Environment from "./Assets/Environment.png"
import Learning from "./Assets/Learning.png"

import rahul from "../../assets/rahul.jpeg"
import chairman from "../../assets/chairman.webp"
import brandon from "../../assets/brandon.jpg"
import santha from "../../assets/santhakumari.jpg"
import vinay from "../../assets/Vinay.jpg"

export default function Home() {
    return (
        <div className="home">
            <div className='hero'>
                <div className="homeLeft">
                    <h1>
                        ACT
                    </h1>
                    <h3>
                        ART | COGNITION | TECHNOLOGY
                    </h3>
                    <p>
                    The ACT Centre envisions a future where trans-disciplinary collaboration is not just encouraged but embedded in our educational and research culture.
                    </p>

                    <div className='homeButtonCont'>
                        <a target="_blank" href="#kuchto"> <button className='homeButton button'>Research Topics</button> </a>
                        <a target="_blank" href="#kuchto"> <button className='homeButton button'>Trello</button> </a>
                    </div>

                </div>

                <div className="homeRight">
                    <div className="submissionCall">
                        <h2>Call for Submissions!</h2>
                        <p>Do you have a creative spark? Share your voice! We're looking for submissions for our center. See our guidelines and join our community!</p>
                        
                        <div>
                            <a target="_blank" href="/submission"><button className='button homeButton'>Make a Submission</button></a>
                            <a target="_blank" href="/Examples"><button className='button homeButton aboutButton'>Example Projects</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homeInterestAreas" id='kuchto'>

                <h3>Stride towards perfection</h3>
                <h1>Areas Of Interest</h1>

                <div className="homeInterestAreaCont">
                    <div className="homeInterestArea">
                        <img src={Health} alt="" />
                        <h3>Health and <br /> Well-being</h3>
                        <p>Unraveling health disparities, innovative healthcare delivery, and the development of interventions to enhance overall well-being.</p>
                    </div>

                    <div className="homeInterestArea">
                        <img src={Environment} alt="" />
                        <h3>Environment, Energy and Sustainability</h3>
                        <p>Exploration of sustainable solutions to environmental challenges, including energy      conservation, biodiversity preservation, and mitigation of climate change impacts.</p>
                    </div>

                    <div className="homeInterestArea">
                        <img src={Learning} alt="" />
                        <h3>Learning and Pedagogy</h3>
                        <p>Investigating novel methods and strategies to advance education and pedagogical practices, with a focus on improving learning outcomes and fostering lifelong learning.</p>
                    </div>
                </div>

                <div className="homeButtonCont">
                    <a target="_blank" href="/about"> <button className='homeButton button'>Read More </button> </a>
                    <a target="_blank" href="/submission"> <button className='homeButton button'> Submissions </button> </a>
                </div>

            </div>

            <div className="homePoster">

            </div>

            <div className="homeVideos">

                <div className="homeVideoSection">
                    <div className="homeVideoSectionText" style={{marginLeft: "50px"}}>
                        <h3>Trans-disciplinary Cooperation</h3>
                        <p>The Centre aims to facilitate collaboration among diverse faculties, breaking down traditional silos to encourage the convergence of ideas, methodologies, and expertise. By fostering a culture of collaboration, we foresee the emergence of innovative solutions to complex problems.</p>

                        <a target="_blank" href="/about"><button className='homeButton button red' style={{color: "white"}}>Read More</button></a>
                    </div>
                    <div className="homeVideoSectionVideo">
                        <iframe height="100%" width="100%" src="https://www.youtube.com/embed/mtVY5SXH_f0" title="ACT Centre Envision (Director&#39;s Message)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="homeVideoSection">
                    <div className="homeVideoSectionVideo">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Hr_48d8YKNw" title="ACT Centre: Introduction and Expectations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="homeVideoSectionText" style={{marginRight: "50px"}}>
                        <h3>Cutting-Edge Research</h3>
                        <p>At the core of ACT Centre's mission is the pursuit of research categorized by novelty and the potential for significant impact, aligning with Thapar’s commitment to academic excellence. The expectation for approved projects is the co-authoring of research papers publishable in peer-reviewed academic journals. Other forms of outcomes (artistic, practical, educational, etc.) could be secondary outcomes of research in the context of the ACT Centre.</p>

                        <a target="_blank" href="/about"><button style={{color: "black"}} className='homeButton button yellow'>Read More</button></a>
                    </div>
                </div>

            </div>

            
            <div className="homeTeam">

                <div>
                    <h1>Meet Our Team</h1>
                    <h6>The Force Behind ACT Centre and TSLAS at TIET</h6>
                </div>
                
                <div className='homeTeamCont'>
                
                <a target="_blank" href="https://tslas.thapar.edu/facultymaster/71">
                <div className="homeTeamMember">
                    <img src={chairman} alt="" />
                    <h3>Dr. Efthymios Constantinides</h3>
                    <h6>Chair, ACT Centre</h6>
                    <h6>Professor, TSLAS</h6>
                </div>
                </a>

                <a target="_blank" href="https://tslas.thapar.edu/facultymaster/26">
                <div className="homeTeamMember">
                    <img src={santha} alt="" />
                    <h3>Dr. Santha Kumari</h3>
                    <h6>Program Chair & Head, TSLAS</h6>
                    <h6>Professor, TSLAS</h6>
                </div>
                </a>

                <a target="_blank" href="https://tslas.thapar.edu/facultymaster/25">
                <div className="homeTeamMember">
                    <img src={vinay} alt="" />
                    <h3>Dr. Vinay Kumar</h3>
                    <h6>Associate Head, TSLAS</h6>
                    <h6>Associate Professor, TIET</h6>
                </div>
                </a>

                <a target="_blank" href="https://tslas.thapar.edu/facultymaster/44">
                <div className="homeTeamMember">
                    <img src={rahul} alt="" />
                    <h3>Dr. Rahul Upadhyay</h3>
                    <h6>Coordinator, ACT Centre</h6>
                    <h6>Associate Professor, TIET</h6>
                </div>
                </a>

                <a target="_blank" href="https://tslas.thapar.edu/facultymaster/62">
                <div className="homeTeamMember">
                    <img src={brandon} alt="" />
                    <h3>Dr. T. Brandon Evans</h3>
                    <h6>Coordinator, ACT Centre</h6>
                    <h6>Assistant Professor, TSLAS</h6>
                </div>
                </a>

                </div>

                {/* <div className="homeTeamMember">
                    <img src={santha} alt="" />
                    <h3>Dr. Santha Kumari</h3>
                    <h6>Program Chair & Head, TSLAS</h6>
                    <h6>Professor, TSLAS</h6>
                </div>

                <div className="homeTeamMember">
                    <img src={santha} alt="" />
                    <h3>Dr. Santha Kumari</h3>
                    <h6>Program Chair & Head, TSLAS</h6>
                    <h6>Professor, TSLAS</h6>
                </div> */}
            </div>
        </div>
    )
}
