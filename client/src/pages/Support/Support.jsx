import Main from "../../components/Layout/Layout";
import "./Support.css";

export default function Support() {
  return (
    <div>
      <Main Heading="Support" SubHead="Get to know us better" Body={Body()} />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <div className="body">
        <h1>Financing</h1>
        <p>
          The projects approved are eligible for a grants. The funding will cover costs occurring during the project: Lab
          equipment, survey costs, publication costs in open-source journals,
          etc. A detailed budget must be submitted together with the project
          proposal, mentioning also the fund requirements during different
          stages of the project. The funding is subject to approval only.

          <br />
          <br />

          The cost reporting must be in line with the
          project stages, divided into 6-month periods, following the project
          timetable project time table submitted. The project budget does not
          cover travel or possible conference costs.

          <br />
          <br />

          We must agree on what is
          not covered by these costs; For example, participation in a conference
          can be discussed. Also publication costs in open-source journals
          require funds.
        </p>

        <h1>General Terms and Conditions for the Grant</h1>

        <p>A proposal will be accepted if it is graded with more than 40 points and it does not score 0 in any of the criteria. The proposals must be uploaded to www.act.thapar.edu</p>
      </div>
    </div>
  );
};
