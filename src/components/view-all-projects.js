import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import Button from "@material-ui/core/Button";
import {css} from "@emotion/react";

const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`;
const ViewAllProjects = () => {
  return (
    <Wrapper>
      <Button variant="contained" color="primary" disableElevation>
        <Link
          to="/"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          View all projects
        </Link>
      </Button>
    </Wrapper>
  );
};

export default ViewAllProjects;
