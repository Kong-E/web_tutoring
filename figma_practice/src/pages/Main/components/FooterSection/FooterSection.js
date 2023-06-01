import {
  Container,
  DefaultTypo,
  EmailInput,
  EmailInputButton,
  Icon,
  IconBar,
  LogoImage,
  Section,
  SubscribeTypo,
  TitleTypo,
  UpButton,
} from "./styled";
import logo from "../../../../assets/icon/logo.png";
import facebook from "../../../../assets/icon/facebook.png";
import twitter from "../../../../assets/icon/twitter.png";
import instagram from "../../../../assets/icon/instagram.png";

export const FooterSection = () => {
  return (
    <Container>
      <Section>
        <div>
          <LogoImage src={logo} />
          <DefaultTypo>
            Copyright © 2020. LogoIpsum. All rights reserved.
          </DefaultTypo>
        </div>
        <div>
          <SubscribeTypo>Subscribe to our newsletter</SubscribeTypo>
          <EmailInput placeholder="Email address" />
          <EmailInputButton onClick={() => alert("clicked")}>
            &gt;
          </EmailInputButton>
        </div>
      </Section>
      <Section>
        <TitleTypo>Services</TitleTypo>
        <DefaultTypo>Email Marketing</DefaultTypo>
        <DefaultTypo>Campaigns</DefaultTypo>
        <DefaultTypo>Branding</DefaultTypo>
        <DefaultTypo>Offline</DefaultTypo>
      </Section>
      <Section>
        <TitleTypo>Services</TitleTypo>
        <DefaultTypo>Email Marketing</DefaultTypo>
        <DefaultTypo>Campaigns</DefaultTypo>
        <DefaultTypo>Branding</DefaultTypo>
        <DefaultTypo>Offline</DefaultTypo>
      </Section>
      <Section>
        <UpButton>^</UpButton>
        <IconBar>
          <Icon src={facebook} />
          <Icon src={twitter} />
          <Icon src={instagram} />
        </IconBar>
      </Section>
    </Container>
  );
};
