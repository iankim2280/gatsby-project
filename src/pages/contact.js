import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
// import {Link} from "gatsby";

const Wrapper = styled.section`
  padding-top: 100px;
  width: 75%;
  // background: red;
  margin: 0 auto;
  text-align: center;
`;
const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  padding: 20px;

  @media only screen and (max-width: 920px) {
    flex-direction: column;
    p {
      width: 100%;
    }
  }
`;
const CoffeeWrapper = styled.section`
  margin-top: 25px;
  padding: 20px;
`;
const About = () => {
  return (
    <Layout>
      <Wrapper>
        <h1 className="ubuntuFont">I'm Ian.</h1>
        <SectionWrapper>
          <h3 className="ubuntuFont">Profile</h3>
          <p className="ptSansFont">
            My name is Seunghyun Ian Kim. I have completed relevant training and
            educational background include my Ontario College Diploma in
            Computer Studies. In my previous role, I develop and design concepts
            and control the flow of projects from start to finish. Additionally,
            I am enthusiastic about creative designs. I believe that my core
            skills and unique qualifications would make me a valuable addition
            to your team.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <h3 className="ubuntuFont">Skills</h3>
          <p className="ptSansFont">
            Solid understanding of Web design: HTML & CSS & JavaScript and
            technologies such as Node JS, React JS, C# & ASP.NET Core.
            <br />
            UX/UI, Creativity, Problem Solving, Communication, and Interpersonal
            Abilities.
            <br />
            Adobe Creative Suite: Photoshop and Illustrator skills.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <h3 className="ubuntuFont">Contact</h3>
          <p className="ptSansFont">
            Email - iankim2280@gmail.com Tel - (249) 989-2280
          </p>
        </SectionWrapper>
        <CoffeeWrapper>
          <h1 className="ubuntuFont">Let's grab a coffee</h1>
          <p className="ptSansFont">
            I'm open to hearing about new opportunities and having interesting
            discussions related to modern web design and its stacks. Feel free
            to send me a message or email and I'll get back to you as soon as
            possible. Or, if you live in nearby Barrie, ON, we can meet and grab
            a coffee.
          </p>
        </CoffeeWrapper>
      </Wrapper>
    </Layout>
  );
};

export default About;
