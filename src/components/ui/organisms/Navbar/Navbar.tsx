import {
  NavbarInnerWrapper,
  NavbarList,
  NavbarListItem,
  NavbarLogo,
  NavbarWrapper,
} from './Navbar.styles';
import { type NavbarProps } from './types';

const Navbar = ({}: NavbarProps) => {
  return (
    <>
      <NavbarWrapper>
        <NavbarInnerWrapper>
          <NavbarLogo>JLYTN</NavbarLogo>

          <NavbarList>
            <NavbarListItem>About</NavbarListItem>
            <NavbarListItem>Projects</NavbarListItem>
            <NavbarListItem>Contact</NavbarListItem>
          </NavbarList>
        </NavbarInnerWrapper>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
