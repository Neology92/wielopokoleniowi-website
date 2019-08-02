import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const PostFooterGraphics = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "postFooterGraphics.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} />;
};

export default PostFooterGraphics;
