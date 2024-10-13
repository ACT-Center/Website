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
                    <a className='genlink' 
                    href="https://drive.google.com/file/d/1SNokpAmaCuFU_XtObTmthOe8zueSoRjW/view?usp=sharing">
                        Click Here
                    </a>
                </p>

                <br />
                
                <p>
                    Project approval and implementation process:  
                    <a className='genlink' 
                    href="https://drive.google.com/file/d/1if3jkKqyiNiRL7049fJRtgw-LQafU8o0/view?usp=sharing">
                        Click Here
                    </a>
                </p>
            </div>
        </>
    )
}