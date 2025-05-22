import Main from "../../components/Layout/Layout";
import "./Submission.css";

export default function Submission() {
  return (
    <div>
      <Main
        Heading="Submissions"
        SubHead="Share your work"
        Body={Body()}
      />
    </div>
  );
}

function Body() {
  return (
    <div className="body">
      <Guidelines />
      <br />
      <Evaluation />
      <br />
      <Financing/>

      <div className="subButtonGroup">
        <button className="button homeButton aboutButton">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeq_RQ5pVOLZ0vaclfxjRsqknC8nScoI-5hH4mpeen0oheGNQ/viewform?usp=sf_link" target="blank">Submission Form</a>
        </button>

        <button className="button homeButton aboutButton">
          <a href="/examples">Example Projects</a>
        </button>
      </div>

    </div>
  );
};


function Guidelines() {

  return (
    <>
      <h1>Guidelines</h1>
      <p>
        The maximum duration of a project is two years with conditional
        extension up to one year. Please use <a target="_blank" className="genlink" href="https://drive.google.com/file/d/1dmXYwjakHYbe5Cj0psC1y58VZh5xTiDd/view?usp=sharing"> submission template</a> while preparing
        the project proposal. The plan of the project must be submitted identifying the project
        objectives/milestones on the basis of half-year intervals (interim
        progress reports). The deliverables will be reviewed every six months on
        the basis of the project objectives/targets for the period in question.
        A progress report will be submitted by the research team on a bi-yearly
        basis and meeting the objectives/targets will be the criterion for the
        financing of the following project face. The proposals submitted will be
        reviewed and evaluated by the ACT Centre.
      </p>
    </>

  )

}

function Evaluation() {
  return (
    <>
      <p>
        The approval of a proposal involves evaluating its feasibility,
        originality, relevance, innovation and potential impact across
        multiple disciplines, the potential academic impact (publications) and
        its practical impact in accordance with the <a target="_blank" className="genlink" href="https://drive.google.com/file/d/1MmToiKIbxGkR7LDoJCRiVWBDjdmJov3n/view?usp=sharing">evaluation matrix.</a>
      </p>

      <br />

      <p>
          <a className='genlink'
            href="./ProcessRecruitement.pdf">
            Process for recruitment of research fellows
          </a>
          &nbsp; | &nbsp;
          <a className='genlink'
            href="https://drive.google.com/file/d/1if3jkKqyiNiRL7049fJRtgw-LQafU8o0/view?usp=sharing">
            Project approval and implementation process
          </a>
        </p>

      <br />
      <h3>Evalutaion Parameters</h3>

      <ul>
        <li>Integration of Disciplines</li>
        <li>Research Problem and Objectives</li>
        <li>Methodological Rigor</li>
        <li>Academic Relevance and Societal Impact</li>
        <li>Effective Communication and Collaboration Plan and Effective Dissemination</li>
        <li>Feasibility and Resources</li>
        <li>Ethical Considerations</li>
      </ul>
    </>
  )
}

function Financing() {

  return (
    <>
      <h2>Financing</h2>
      <p>
        The projects approved are eligible for a grant (Subject to approval).
        The funding will cover costs occurring during the project: Lab
        equipment, survey costs, Etc{" "}
        <a target="_blank" href="https://drive.google.com/file/d/1-XCdLGfK2a0Y14lexTHVbJq6b6FXvYsG/view?usp=sharing" className="genlink">(Financial Assistance Document)</a>.

        A detailed budget must be submitted with the project proposal. The cost
        reporting must be in line with the project stages, divided into 6-month
        periods. A proposal will be accepted if it is graded with more than 40
        points and it does not score 0 in any of the criteria{" "}
        <a target="_blank" href="https://drive.google.com/file/d/1MmToiKIbxGkR7LDoJCRiVWBDjdmJov3n/view" className="genlink">Evaluation Matrix.</a>
      </p>
    </>
  )

}