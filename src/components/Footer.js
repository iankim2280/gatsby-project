import React from "react";
import styled from "styled-components";
import {GoMarkGithub} from "react-icons/go";
import {FaLinkedin} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";

const Wrapper = styled.footer`
  padding: 10px;
  background: papayawhip;
  text-align: center;
`;
const iconSize = {
  fontSize: "1.5rem",
  margin: "5px",
};
const Footer = () => {
  return (
    <Wrapper>
      <GoMarkGithub style={iconSize} />
      <FaLinkedin style={iconSize} />
      <AiOutlineMail style={iconSize} />
    </Wrapper>
  );
};

export default Footer;
