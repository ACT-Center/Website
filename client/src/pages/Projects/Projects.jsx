import "./Projects.css"
import Main from '../../components/Layout/Layout'
import projectList from "./Projects"

export default function Projects() {
  return (
    <div>
        <Main Heading="Ongoing Projects" SubHead="Examples of excellence" Body={Body()}/>
    </div>
  )
}

function Body(){

    return(
        <div className='body'>

            {
                projectList.map((project, i) => (
                    <Project head={project.title} pis={project.pis} index={i+1}/>
                ))
            }
            
        </div>
    )

}

function Project({head, pis, index}){

    return(
        <>
            <div className="project">
                <h3>{head}</h3>
                <p>{pis}</p>
            </div>
        </>
    )

}


