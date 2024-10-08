import Main from "../../components/Layout/Layout";
import "./Evaluation.css";

export default function Evaluation() {
  return (
    <div>
      <Main
        Heading="Evaluation"
        SubHead="parameters to care"
        Body={Body()}
      />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <div className="body">
        <p>
          The approval of a proposal involves evaluating its feasibility,
          originality, relevance, innovation and potential impact across
          multiple disciplines, the potential academic impact (publications) and
          its practical impact.
          <br />
          <br />
          The various criteria will have a different weight in the final grading
          of the proposal. A minimum grade is required for a proposal to be
          accepted. All issues mentioned must be addressed in the proposal.
        </p>

        <h1></h1>
        <h1>Evalutaion Parameters</h1>

        <ul>
          <li>Integration of Disciplines</li>
          <li>Research Problem and Objectives</li>
          <li>Methodological Rigor</li>
          <li>Academic Relevance and Societal Impact</li>
          <li>Effective Communication and Collaboration Plan and Effective Dissemination</li>
          <li>Feasibility and Resources</li>
          <li>Ethical Considerations</li>
        </ul>

        <br />
        <p>Supporting Documents: <a target="_blank" className="genlink" href="https://drive.google.com/file/d/1MmToiKIbxGkR7LDoJCRiVWBDjdmJov3n/view?usp=sharing">Evaluation Matrix</a></p>

        {/* <table border="10" className="eval">
          <tr>
            <th>Criteria</th>
            <th>Weight</th>
          </tr>
          <tr>
            <td>
              <strong>Integration of Disciplines</strong>
              <ul>
                <li>Justification for the transdisciplinary approach</li>
                <li>How insights from different disciplines will be integrated to address the research problem</li>
              </ul>
            </td>
            <td>5</td>
          </tr>

          <tr>
            <td>
              <strong>Research Problem and Objectives</strong>
              <ul>
                <li> Well-defined research problem, research questions, and objectives </li>
                <li> Research Questions complex enough to warrant collaboration across multiple disciplines </li>
              </ul>
            </td>
            <td>5</td>
          </tr>

          <tr>
            <td>
              <strong>Methodological Rigor</strong>
              <ul>
                <li>Methods are rigorous, comprehensive, and innovative</li>
                <li>Methods ar appropriate for each discipline involved</li>
                <li>The research design(s) is robust and the methods are transparent and replicable.</li>
              </ul>
            </td>
            <td>4</td>
          </tr>

          <tr>
            <td>
              <strong>Academic Relevance and Societal Impact</strong>
              <ul>
                <li>The proposal is relevant, related to an academic topic</li>
                <li>The proposal addresses one or more real-world challenges</li>
                <li>The proposal has the potential to generate high-quality academic publications</li>
              </ul>
            </td>
            <td>4</td>
          </tr>

          <tr>
            <td>
              <strong>Effective Communication and Collaboration Plan and Effective Dissemination</strong>
              <ul>
                <li>Conflict-resolving mechanisms and an understanding of how different perspectives will be integrated into the research process.</li>
                <li>Strategy for dissemination of knowledge across disciplines (scientific publications, conferences) promoting collaboration and ensuring the broader impact of the research</li>
              </ul>
            </td>
            <td>3</td>
          </tr>

          <tr>
            <td>
              <strong>Feasibility and Resources</strong>
              <ul>
                <li>Realistic assessment of the feasibility of the proposed research (availability of resources, expertise, and infrastructure justifying the amount required)</li>
                <li>A well-defined budget and timeline that accounts for the complexities of transdisciplinary research</li>
              </ul>
            </td>
            <td>2</td>
          </tr>

          <tr>
            <td>
              <strong>Ethical Considerations</strong>
              <ul>
                <li>Assessment of the ethical consideration of the study, especially when dealing with diverse populations, private information, or sensitive issues</li>
                <li>Ethical guidelines ensuring the well-being and consent of participants</li>
              </ul>
            </td>
            <td>2</td>
          </tr>
        </table> */}
        
      </div>
    </div>
  );
};
