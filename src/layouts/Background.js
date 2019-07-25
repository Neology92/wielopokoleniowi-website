import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxHeight: 768) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor="#F8F8F8"
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

BackgroundSection.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Background = styled(BackgroundSection)`
  width: 100%;
  background-position: top center;
  background-repeat: repeat;
  background-size: contain;
`;

export default Background;
