import Main from "../../components/Layout/Layout";
import "./Aboutus.css";
import Team from "../../components/Team/Team";

export default function Aboutus() {
  return (
    <div>
      <Main Heading="About Us" SubHead="Get to know us better" Body={Body()} />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <div className="body">
        <h1>Background</h1>
        <p>
          Transdisciplinary research represents an evolving paradigm (Beavis and Gibbs, 2020) that
          transcends traditional disciplinary boundaries, by encouraging collaboration and integration
          of knowledge from various fields. Transdisciplinary research proves particularly efficacious
          when tackling complex problems that elude comprehensive knowledge or resolution beyond
          the confines of a solitary discipline. This is because the nature of many pressing
          contemporary societal challenges necessitates an approach that surpasses isolated
          disciplinary approaches: multiple disciplinary perspectives provide partial and often
          incompatible explanations of the structures, causes, or effects that matter. Often, many
          candidate solutions are available to address these issues, but there is uncertainty or
          disagreement about what to prioritize or avoid. In addressing these complex issues, the
          isolationist stance of a singular discipline&#39;s rigorous scientific criteria may fall short of
          generating socially robust outcomes. (Nowotny et al., 2003).

          <br /><br />

          According to Pohl et al. (2007), transdisciplinary research is most needed in situations when
          Knowledge about a societally relevant problem field is uncertain when the concrete nature
          of problems is disputed, and when there is a great deal at stake for those concerned by
          problems and involved in dealing with them.
          <br /><br />

          Transdisciplinary research deals with problem fields in such a way that it can:
          <ul>
            <li>grasp the complexity of problems</li>
            <li>take into account the diversity of life-world and scientific perceptions of problems</li>
            <li>link abstract and case-specific knowledge, and</li>
            <li>develop knowledge and practices that promote what is perceived to be the common
              good. (Pohl et al. 2007 )</li>
          </ul>

        </p>

        <h1>Mission</h1>
        <p>
          ACT Centre strategically aims to instigate and promote
          transdisciplinary research within the Thapar Institute of Engineering
          and Technology. This goal aligns with the Thapar Institute’s
          commitment to staff personal and professional development, and the
          goal of advancing and disseminating academic knowledge in domains
          related to the institute’s scientific domains. By achieving these
          goals Thapar Institute aims at obtaining a prominent position as a
          technological university in India and internationally.
          <br />
          <br />
          The ACT Centre extends an invitation to all academic personnel to
          actively engage in this initiative by identifying transdisciplinary
          research topics connecting with colleagues from diverse knowledge
          domains and proposing projects that promise novel and high-quality
          publications.
          <br />
          <br />
          To ensure the depth and breadth of transdisciplinary engagement, the
          ACT centre stipulates that a minimum of three disciplines must be
          involved in the proposal to be eligible for financial support. This
          requirement underscores our commitment to fostering truly integrative
          research endeavors that contribute meaningfully to the collective
          pursuit of knowledge and the common good.
        </p>

        <button className="homeButton aboutButton"><a href="/submission">Project Submission</a></button>

        <Team/>

      </div>
    </div>
  );
};
