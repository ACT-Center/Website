import React from 'react'

import rahul from "../../assets/rahul.jpeg"
import chairman from "../../assets/chairman.webp"
import brandon from "../../assets/brandon.jpg"
import santha from "../../assets/santhakumari.jpg"
import vinay from "../../assets/Vinay.jpg"

export default function Team() {
    return (
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

                <a target="_blank" href="https://tslas.thapar.edu/facultymaster/25">
                    <div className="homeTeamMember">
                        <img src={vinay} alt="" />
                        <h3>Dr. Vinay Kumar</h3>
                        <h6>Dean, TSLAS</h6>
                        <h6>Professor, TIET</h6>
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

        </div>
    )
}
