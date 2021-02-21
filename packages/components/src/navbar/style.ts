import Styled from 'styled-components';

export const Navbar = Styled.nav`
  position: sticky;
  top: 0px;
  z-index: 999;
  height: 32px;
  background: white;
  padding: 20px 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = Styled.img`
  max-height: 100px;
`;

export const SectionRight = Styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
`;

export const Separator = Styled.div`
  width: 1.2px;
  min-width: 1.2px;
  height: 40px;
  background: rgb(255, 212, 28);
  margin: 0px 16px;
`;