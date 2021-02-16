import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import {GoMarkGithub} from "react-icons/go";
import {FaLinkedin} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";

const Wrapper = styled.footer`
  padding: 10px;
  height: 15vh;
  // background: red;
  text-align: center;
  margin-top: 25px;
  border-top: 1px solid #181036;
  @media only screen and (max-width: 920px) {
    height: 100px;
  }
`;
const IconWrapper = styled.section`
  margin-top: 20px;
  a {
    color: #000;
  }
`;

const iconSize = {
  fontSize: "1.5rem",
  margin: "5px",
};
const Footer = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Link to="https://github.com/iankim2280">
          <GoMarkGithub style={iconSize} />
        </Link>
        <Link to="https://www.linkedin.com/in/camelkish1/">
          <FaLinkedin style={iconSize} />
        </Link>
        <a href="mailto:iankim2280@gmail.com">
          <AiOutlineMail style={iconSize} />
        </a>
      </IconWrapper>
      © 2021, Ian Kim, All Rights Reserved.
    </Wrapper>
  );
};

export default Footer;
