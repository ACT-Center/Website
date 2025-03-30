import React from 'react'
import "./Home.css"

import { TypeAnimation } from "react-type-animation";
import { useParallax } from 'react-scroll-parallax';

import Health from "./Assets/Health.png"
import Environment from "./Assets/Environment.png"
import Learning from "./Assets/Learning.png"

import bg from "../../assets/landingBG1.jpg"

import Team from '../../components/Team/Team';

export default function Home() {

    const {ref: r1} = useParallax({ speed: 20 })
    const {ref: r2} = useParallax({ translateX: [-20, 20] })
    const {ref: r3} = useParallax({ translateX: [20, -20] })
    const {ref: r4} = useParallax({ translateX: [-5, 0] })
    
    return (
        <div className="home">
            <div className='hero'>

                <div className="herobg" ref={r1}></div>
                <div className="homeLeft">
                    <TypeAnimation
                        sequence={[
                            'Art',
                            2000,
                            'Cognition',
                            2000,
                            'Technology',
                            2000,
                        ]}
                        wrapper="h1"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <p>
                        The ACT Centre envisions a future where trans-disciplinary collaboration is not just encouraged but embedded in our educational and research culture.
                    </p>

                    <div className='homeButtonCont'>
                        <a href="/resources"> <button className='homeButton button'>Resources</button> </a>
                        <a target='blank' href="https://trello.com/"> <button className='homeButton button'>Trello</button> </a>
                    </div>

                </div>
                <div className="homeRight">
                    <div className="submissionCall">
                        <h2>Call for Submissions!</h2>
                        <p>Do you have a creative spark? Share your voice! We're looking for submissions for our center. See our guidelines and join our community!</p>

                        <div>
                            <a href="/submission"><button className='button homeButton'>Make a Submission</button></a>
                            <a href="/Examples"><button className='button homeButton aboutButton'>Example Projects</button></a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="homeInterestAreas" id='kuchto'>

                <h3>Stride towards perfection</h3>
                <h1>Areas Of Interest</h1>

                <div className="homeInterestAreaCont">
                    <div className="homeInterestArea" ref={r2}>
                        <img src={Health} alt="" />
                        <h3>Health and Well-being</h3>
                        <p>Unraveling health disparities, innovative healthcare delivery, and the development of interventions to enhance overall well-being.</p>
                    </div>

                    <div className="homeInterestArea">
                        <img src={Environment} alt="" />
                        <h3>Environment, Energy and Sustainability</h3>
                        <p>Exploration of sustainable solutions to environmental challenges, including biodiversity preservation, and mitigation of climate change impacts.</p>
                    </div>

                    <div className="homeInterestArea" ref={r3}>
                        <img src={Learning} alt="" />
                        <h3>Learning and Pedagogy</h3>
                        <p>Investigating novel methods and strategies to advance education and pedagogical practices, with a focus on fostering lifelong learning.</p>
                    </div>
                </div>

                <div className="homeButtonCont">
                    <a href="/about"> <button className='homeButton button'>Read More </button> </a>
                    <a href="/submission"> <button className='homeButton button'> Submissions </button> </a>
                </div>

            </div>

            <div className="homePoster">
                
                <img src={bg} className='posterimg' ref={r4} />

                <blockquote>
                    Education is not the learning of facts, <br />
                    but the training of the mind to think! <br />
                    <span>-- Albert Einstein</span>
                </blockquote>

            </div>

            <div className="homeVideos">

                <div className="homeVideoSection">
                    <div className="homeVideoSectionText">
                        <h3>Trans-disciplinary Cooperation</h3>
                        <p>The Centre aims to facilitate collaboration among diverse faculties, breaking down traditional silos to encourage the convergence of ideas, methodologies, and expertise. By fostering a culture of collaboration, we foresee the emergence of innovative solutions to complex problems.</p>

                        <a href="/about"><button className='homeButton button red' style={{ color: "white" }}>Read More</button></a>
                    </div>
                    <div className="homeVideoSectionVideo">
                        <iframe height="100%" width="100%" src="https://www.youtube.com/embed/mtVY5SXH_f0" title="ACT Centre Envision (Director&#39;s Message)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="homeVideoSection">
                    <div className="homeVideoSectionVideo">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Hr_48d8YKNw" title="ACT Centre: Introduction and Expectations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="homeVideoSectionText">
                        <h3>Cutting-Edge Research</h3>
                        <p>At the core of ACT Centre's mission is the pursuit of research categorized by novelty and the potential for significant impact, aligning with Thapar’s commitment to academic excellence. The expectation for approved projects is the co-authoring of research papers publishable in peer-reviewed academic journals. Other forms of outcomes (artistic, practical, educational, etc.) could be secondary outcomes of research in the context of the ACT Centre.</p>

                        <a href="/about"><button style={{ color: "black" }} className='homeButton button yellow'>Read More</button></a>
                    </div>
                </div>

            </div>


            <Team/>
        </div>
    )
}
