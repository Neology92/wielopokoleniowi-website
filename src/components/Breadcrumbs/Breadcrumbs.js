import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Breadcrumbs = ({ path, isPost }) => {
  const breadcrumbsArray = path
    .toUpperCase()
    .slice(1)
    .split('/');

  const slugs = [];

  breadcrumbsArray.forEach((elem, index) => {
    let slug = '';
    for (let i = 0; i <= index; i++) {
      slug += `/${breadcrumbsArray[i].toLowerCase()}`;
    }
    slugs.push(slug);
  });

  if (isPost) {
    slugs.pop();
    slugs.push('/');
  }

  return (
    <BreadcrumbsWrapper>
      <StyledLink to="/"> Home </StyledLink>
      {breadcrumbsArray.map((element, i) => (
        <Fragment key={element}>
          {' / '}
          <StyledLink to={slugs[i]}>
            {`${element.split('-').join(' ')}`}
          </StyledLink>
        </Fragment>
      ))}
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

  & > a:last-child {
    pointer-events: none;
    color: rgb(${({ theme }) => theme.color.rgb.nightBlue}, 0.4);

    &:hover {
      color: rgb(${({ theme }) => theme.color.rgb.nightBlue}, 0.4);
    }
  }
`;

Breadcrumbs.propTypes = {
  path: PropTypes.string.isRequired,
  isPost: PropTypes.bool,
};

Breadcrumbs.defaultProps = {
  isPost: false,
};

export default Breadcrumbs;
