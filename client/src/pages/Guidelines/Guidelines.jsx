import React from 'react'
import Main from '../../components/Layout/Layout'

export default function Guidelines() {
  return (
    <div>
        <Main
            Heading="Guidelines"
            SubHead="Charting the Course: From Research to Realization"
            Body={Body()}
        />
    </div>
  )
}


function Body(){
    return (
        <>
            <div className="body">
                <h1>Guidelines</h1>
                <p>
                    Uncover the path to joining our research team and the steps that bring innovative projects to life. This guide offers insights into recruitment and approval processes, designed to help you navigate with ease.
                </p>

                <br />

                <p>
                    Process for recruitment of research fellows:  
                    <a className='genlink' href="https://docs.google.com/document/d/1-KfDvnoKxYyn4BObSQ1CwY9B7Q5rQXYy/edit?usp=sharing&ouid=101618871564262500186&rtpof=true&sd=true">
                        Click Here
                    </a>
                </p>

                <br />
                
                <p>
                    Project approval and implementation process:  
                    <a className='genlink' href="https://docs.google.com/document/d/1yChnx1cdkQiVi5v9R7dZsk_6rpwfgw-0/edit?usp=sharing&ouid=101618871564262500186&rtpof=true&sd=true">
                        Click Here
                    </a>
                </p>
            </div>
        </>
    )
}