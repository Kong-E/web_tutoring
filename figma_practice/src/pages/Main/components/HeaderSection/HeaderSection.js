import {
  Container,
  Icon,
  IconBar,
  LogoImage,
  MenuIcon,
  NavBar,
} from "./styled";
import facebookIcon from "../../../../assets/icon/facebook.png";
import twitterIcon from "../../../../assets/icon/twitter.png";
import LinkedInIcon from "../../../../assets/icon/linkedIn.png";
import instagramIcon from "../../../../assets/icon/instagram.png";
import logo from "../../../../assets/icon/logo.png";
import menuIcon from "../../../../assets/icon/menu.png";

export const HeaderSection = () => {
  return (
    <>
      <Container>
        <IconBar>
          <Icon src={facebookIcon} />
          <Icon src={twitterIcon} />
          <Icon src={LinkedInIcon} />
          <Icon src={instagramIcon} />
        </IconBar>
        <NavBar>
          <LogoImage src={logo} />
          <MenuIcon src={menuIcon} />
        </NavBar>
      </Container>
    </>
  );
};
