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

const Body = () => {
  return (
    <div className="body">
      <h1>Guidelines</h1>
      <p>
        The maximum duration of a project is two years with conditional
        extension up to one year. Please use submission template while preparing
        the project proposal.
        {" ("}
        <a target="_blank"
          className="genlink"
          href="https://drive.google.com/file/d/1dmXYwjakHYbe5Cj0psC1y58VZh5xTiDd/view?usp=sharing"
        >
          Template
        </a>
        {")"}
        <br />
        <br />
        The plan of the project must be submitted identifying the project
        objectives/milestones on the basis of half-year intervals (interim
        progress reports). The deliverables will be reviewed every six months on
        the basis of the project objectives/targets for the period in question.
        A progress report will be submitted by the research team on a bi-yearly
        basis and meeting the objectives/targets will be the criterion for the
        financing of the following project face. The proposals submitted will be
        reviewed and evaluated by the ACT Centre.
        <br />
        <br />
        The interim and final evaluations will be done by the Centre.
      </p>
      <button className="button homeButton aboutButton">
        <a href="/examples">Example Projects</a>
      </button>
      <h1>Financing</h1>
      <p>
        The projects approved are eligible for a grant of up to Rs. 12.50 Lacs.
        The funding will cover costs occurring during the project: Lab
        equipment, survey costs, Etc{" "}
        <a target="_blank" href="https://drive.google.com/file/d/1lCtUKCHUtp2cCRYQUnrHPN91UASS026N/view?usp=sharing" className="genlink">(Financial Assistance Document)</a>.

        A detailed budget must be submitted with the project proposal. The cost
        reporting must be in line with the project stages, divided into 6-month
        periods. A proposal will be accepted if it is graded with more than 40
        points and it does not score 0 in any of the criteria{" "}
        <a target="_blank" href="https://drive.google.com/file/d/1P3tTYSvEnoCUiZcnZCWML3avB7mQGIN1/view?usp=sharing" className="genlink">Evaluation Matrix.</a>
        {" "}The proposals must be uploaded using submission link (add submission
        link here) on ACT website
      </p>

      <br />
    
      <button className="button homeButton aboutButton">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeq_RQ5pVOLZ0vaclfxjRsqknC8nScoI-5hH4mpeen0oheGNQ/viewform?usp=sf_link" target="blank">Submission Form</a>
      </button>

    </div>
  );
};
