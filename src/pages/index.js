import * as React from "react";
import {Link, graphql} from "gatsby";
import "../styles/index.scss";
import AboutMe from "../components/about-me-container";
import Layout from "../components/layout";
import {css} from "@emotion/react";
import {rhythm} from "../utils/typography";

// markup
const IndexPage = ({data}) => {
  console.log(data);
  return (
    <Layout>
      <AboutMe />
      <div className="projectStyles">
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Link
            key={node.id}
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <div className="centerText">
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
