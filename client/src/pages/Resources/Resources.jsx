import Main from "../../components/Layout/Layout";
import "./Resources.css"

export default function Resources() {
  return (
    <div>
      <Main
        Heading="Resources"
        SubHead="Find helpful materials"
        Body={Body()}
      />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <div className="body">

        <h1>Our Resources</h1>

        <div className="resourceCard">
          <h2>Network for Transdisciplinary research</h2>
          <a target="_blank"  href="https://transdisciplinarity.ch/en" className="genlink">https://transdisciplinarity.ch/en</a>
        </div>

        <div className="resourceCard">
          <h2>Trello (Project Management Tool)</h2>
          <a target="_blank"  href="https://trello.com/" className="genlink">https://trello.com/</a>
        </div>

        <div className="resourceCard">
          <h2>How to use Trello</h2>
          <a target="_blank"  href="https://www.youtube.com/watch?v=sC6UwpVEEE0&t=797s" className="genlink">Youtube Video</a>
        </div>

        <div className="resourceCard">
          <h2>Transdisciplinary Research</h2>
          <a target="_blank"  href="https://publications.tno.nl/publication/34640917/PAkH88/TNO-2023-transdisciplinary.pdf" className="genlink">https://publications.tno.nl/</a>
        </div>

        {/* <table border="10" className="eval">
          <tr>
            <th>Resource</th>
            <th>Link</th>
          </tr>
          <tr>
            <td>
                Network for Transdisciplinary research
            </td>
            <td>
                <a target="_blank"  target="_blank" href="https://transdisciplinarity.ch/en">https://transdisciplinarity.ch/en</a>
            </td>
          </tr>

          <tr>
            <td>
              Trello (Project Management Tool)
            </td>
            <td><a target="_blank"  target="_blank" href="https://trello.com/">https://trello.com/</a></td>
          </tr>

          <tr>
            <td>
              How to use Trello
            </td>
            <td><a target="_blank"  target="_blank" href="https://www.youtube.com/watch?v=sC6UwpVEEE0&t=797s">Youtube Video</a></td>
          </tr>

          <tr>
            <td>
              Transdisciplinary Research
            </td>
            <td><a target="_blank"  target="_blank" href="https://publications.tno.nl/publication/34640917/PAkH88/TNO-2023-transdisciplinary.pdf">https://publications.tno.nl/</a></td>
          </tr>

        </table> */}
        
      </div>
    </div>
  );
};
