import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import slugify from 'slugify';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Breadcrumbs = ({ category, title }) => {
  const categoryPl = category === 'Bussines' ? 'dla biznesu' : 'dla każdego';
  return (
    <BreadcrumbsWrapper>
      <StyledLink to="/"> Home </StyledLink>/
      <StyledLink to="/artykuly"> Artykuły </StyledLink>
      {title ? (
        <>
          /
          <StyledLink to={`/artykuly/${slugify(categoryPl)}`}>
            {` ${categoryPl} `}
          </StyledLink>
          {`/ ${title}`}
        </>
      ) : category ? (
        <>{`/ ${category}`}</>
      ) : (
        <Fragment />
      )}
    </BreadcrumbsWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(${({ theme }) => theme.color.rgb.nightBlue}, 0.8);

  &:hover {
    color: rgb(${({ theme }) => theme.color.rgb.nightBlue}, 0.6);
  }
`;

const BreadcrumbsWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-size: 1.4rem;
  text-transform: uppercase;
  color: rgb(${({ theme }) => theme.color.rgb.nightBlue}, 0.4);
`;

Breadcrumbs.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  category: '',
  title: '',
};

export default Breadcrumbs;
