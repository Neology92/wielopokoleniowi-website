import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Image = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "familyRight.png" }) {
        childImageSharp {
          fixed(width: 255, height: 255) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  return (
    <div className={className}>
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>
  );
};

const FamilyRight = styled(Image)`
  display: none;
  ${({ theme }) => theme.media.above.m} {
    display: block;
    position: absolute;
    right: 35px;
    bottom: -40px;
  }
`;

Image.propTypes = {
  className: PropTypes.string.isRequired,
};

export default FamilyRight;
