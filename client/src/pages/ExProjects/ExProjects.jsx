import React from "react";
import Main from "../../components/Layout/Layout";

export default function ExProjects() {
  return (
    <div>
      <Main Heading="Projects" SubHead="See What's Possible" Body={Body()} />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <div className="body">
        <h1>Example Projects</h1>

        <div className="exampleProjects">
          {listitem(
            "Smart Cities (Sustainable) Development",
            "Involves collaboration between Urban Planning, Environmental Science, Computer Science & Engineering, and Business Administration."
          )}

          {listitem(
            "Psychological Impact of Robotics in Elderly Care",
            "Integrates Psychology, Sociology, and Mechanical Engineering to study the psychological and social effects of introducing robotics in elderly care"
          )}

          {listitem(
            "Environmental Policy and Economics",
            "Involves collaboration between Environmental Science, Economics, and Political Science to identify and propose effective policies for environmental conservation."
          )}

          {listitem(
            "Biomedical Nanotechnology",
            "Combining Chemical engineering for nanomaterial synthesis, Biotechnology for applications in healthcare, and Electrical Engineering & Instrumentation Engineering for economic viability and policy implications"
          )}

          {listitem(
            "Cognitive Computing for Political Analysis",
            "Integrating Computer Science for cognitive computing and data analysis, Political Science for understanding political systems and behaviors, and Sociology for societal impact and implications of political decisions"
          )}

          {listitem(
            "Historical Impact of Technological Innovations",
            "Requires collaboration between History, Engineering, and Economics/Marketing to review and study the historical implications and economic and commercial impact of technological innovations"
          )}

          {listitem(
            "Music, Cognition, and Technology",
            "Integrates psychology, cognitive science, music, and communications engineering to study how the brain understands and processes music (as well as language and related phenomena); also includes research about cognition and musical instrument design, and new (electronic) musical instruments/sound engineering products."
          )}

          {listitem(
            "Art as a Methodological Approach in Scientific Practice",
            "This theme seeks to address how art and science share methodological features of experimentation and look toward projects whose outcome could be equally understood as an aesthetic endeavor as well as a work of scientific advancement. Unites contemporary art and other humanities and social science areas with any discipline in engineering or science."
          )}

          {listitem(
            "Neuroeconomics/Neuromarketing and Decision-Making",
            "Integrating Economics, Marketing, Psychology, and Cognitive Science to understand the neural mechanisms underlying consumer decision-making processes. It could also utilize Computer science for data Analysis and Modeling"
          )}

          {listitem(
            "Fostering Innovation Using (Big) Data",
            "Integrating Computer/Data Science for cognitive computing and analyzing market data, Computer engineering, Cognitive Science to understand neural mechanisms, and Marketing for analysis of consumer behavior and development of marketing plans for commercializing knowledge"
          )}

          {listitem(
            "Artistic Dissemination of Socially Important Research in Science",
            "Projects under this theme would be a cross-collaboration between scientific researchers and creative practitioners (filmmakers, exhibition designers, publishers, visual and sonic artists, etc.) to design and disseminate scientific research with high social impact potential. This theme uses art as a pedagogical tool to allow scholarly research to be disseminated to a broader public than the traditional readership of academic journals. Can also include AI as a component."
          )}

          {listitem(
            "Learning from Mythological Storytelling for Data Storytelling:",
            "Age-old narratives are still read and used by millions of people for various purposes. Their potential lies in their ability to captivate millions and be remembered by young and old alike while being simple. Storytelling is also an integral part of data science. Data scientists are looking for new ways of transferring information and old age narrative styles can be used for the purpose. The projects under this theme must explore how narrative structures and symbolism can enhance the communication of data-driven insights and philosophical implications."
          )}

          {listitem(
            "Philosophical Ethics in Artificial Intelligence (AI)",
            "Integrating Computer/Data Science for cognitive computing and analyzing market data, Computer engineering, Cognitive Science to understand neural mechanisms, and Marketing for analysis of consumer behavior and development of marketing plans for commercializing knowledge"
          )}

          
        </div>
      </div>
    </div>
  );
};

const listitem = (Heading, title) => {
  return (
    <div className="listitem">
      <div className="listitemheading">{Heading}</div>
      <div className="listitemtitle">{title}</div>
    </div>
  );
};
