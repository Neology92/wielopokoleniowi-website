import React from 'react';
import { Link } from 'gatsby';

import { MainLayout } from 'layouts';
import { SEO } from 'components';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <Link to="/page-2/">Go to page 2</Link>
  </MainLayout>
);

export default IndexPage;
