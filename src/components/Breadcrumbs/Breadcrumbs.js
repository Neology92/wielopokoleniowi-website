import React from 'react';
import { Link } from 'gatsby';

import slugify from 'slugify';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const If = (condition, then, otherwise) => (condition ? then : otherwise);

const Breadcrumbs = ({ page, category, title }) => {
  const categoryPl = category === 'Bussines' ? 'dla biznesu' : 'dla każdego';

  const articlesCategoryTitle = [
    <>
      /<StyledLink to="/artykuly"> Artykuły </StyledLink>/
      <StyledLink to={`/artykuly/${slugify(categoryPl)}`}>
        {` ${categoryPl} `}
      </StyledLink>
      {`/ ${title}`}
    </>,
  ];

  const articlesCategory = [
    <>
      /<StyledLink to="/artykuly"> Artykuły </StyledLink>
      {`/ ${categoryPl}`}
    </>,
  ];

  const onlyPage = [<>{`/ ${page}`}</>];

  return (
    <BreadcrumbsWrapper>
      <StyledLink to="/"> Home </StyledLink>
      {If(
        title,
        articlesCategoryTitle,
        If(category, articlesCategory, onlyPage)
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
  page: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  page: 'Artykuły',
  category: '',
  title: '',
};

export default Breadcrumbs;
