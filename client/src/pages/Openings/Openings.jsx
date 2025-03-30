import "./Openings.css"
import React from 'react'
import Main from '../../components/Layout/Layout'
import { Link } from "react-router-dom"

export default function Openings() {
  return (
    <div>
        <Main Heading="Openings" SubHead="Join some of the innovations" Body={Body()} />
    </div>
  )
}


function Body(){

    return(
        <div className='body'>
            <Opening head={"Junior Research Fellow"} pis={'Dr. Pankaj Narula, Dr. Harpreet Singh, Dr. Aastha Dhooper'} link={'/openings/1.pdf'}/>
        </div>
    )

}


function Opening({head, pis, link}){

    return(
        <>
            <div className="opening">
                <div>
                    <h2>{head}</h2>
                    <p>{pis}</p>
                    <p>Duration: 2 Years</p>
                </div>

                <a href={link}>
                    <div className="apply">
                        Apply
                    </div>
                </a>

            </div>
        </>
    )

}
