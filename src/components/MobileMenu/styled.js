import styled from 'styled-components';
import { Link } from 'gatsby';

import Facebook from '../Icon/Facebook';
import Youtube from '../Icon/Youtube';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledFacebook = styled(Facebook)`
  height: 33px;
  padding: 15px;
`;

const StyledYoutube = styled(Youtube)`
  height: 28px;
  padding: 15px;
`;

export { StyledLink, StyledFacebook, StyledYoutube };
