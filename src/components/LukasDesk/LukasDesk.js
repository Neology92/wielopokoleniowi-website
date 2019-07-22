import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const LukasDesk = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "LukasDesk.png" }) {
        childImageSharp {
          fixed(width: 493, height: 500) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  return <Img fixed={data.file.childImageSharp.fixed} />;
};

export default LukasDesk;
