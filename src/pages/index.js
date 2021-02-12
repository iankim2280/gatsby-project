import * as React from "react";
import "../styles/index.scss";
import ProjectsContainer from "../components/ProjectsContainer";
import AboutMe from "../components/about-me-container";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <AboutMe />
      <ProjectsContainer />
    </Layout>
  );
};

export default IndexPage;
