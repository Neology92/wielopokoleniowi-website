import styled from 'styled-components';

const CategoryTile = styled.div`
  height: 100%;
  width: 50%;
  background: ${({ theme: { color }, isDark }) =>
    isDark ? color.nightBlue : color.lightBlue};

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`;

export default CategoryTile;
