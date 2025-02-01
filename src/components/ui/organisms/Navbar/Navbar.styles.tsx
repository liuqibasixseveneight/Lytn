import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background: transparent;
  backdrop-filter: blur(1rem);
  border: none;
  left: 0;
  position: fixed;
  height: 160px;
  overflow: hidden;
  right: 0;
  top: 0;
  transition: all 700ms cubic-bezier(0.5, 0, 0.2, 1);
  width: 100%;
  z-index: 2;
`;

export const NavbarInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 6em;
  width: 100%;
`;

export const NavbarLogo = styled.div`
  color: #fff;
  font-size: 60px;
  font-weight: 900;
  letter-spacing: 10px;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const NavbarList = styled.ul`
  align-items: center;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  list-style-type: none;
`;

export const NavbarListItem = styled.li`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 40px;
  font-weight: bold;
  justify-content: center;
`;
