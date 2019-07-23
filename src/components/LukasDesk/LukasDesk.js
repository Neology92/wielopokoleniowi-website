import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const LukasDesk = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "LukasDesk.png" }) {
        childImageSharp {
          fluid(maxWidth: 493) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  // fixed(width: 493, height: 500) {
  // ...GatsbyImageSharpFixed_noBase64

  return <Img fluid={data.file.childImageSharp.fluid} />;
};

export default LukasDesk;
