import { ItemCard } from "../../components/ItemCard";
import { HeaderSection } from "./components/HeaderSection";
import FullService from "../../assets/images/FullService.png";
import ProgressBar from "../../assets/images/ProgressBar.png";
import Email from "../../assets/images/Email.png";
import {
  Container,
  DescTypo,
  MainOfferSection,
  MainSection,
  MainTypo,
  Root,
  TitleSection,
  TitleTypo,
  TitleTypoYellow,
  TitleTypoGray,
  TypoContainer,
  MainFullServiceSection,
  FullServiceContainer,
  TypoSection,
  FullServiceTypo,
  FullServiceTypoTitle,
  FullServiceImage,
  FullServiceProgress,
  EmailImage,
} from "./styled";

export const MainPage = () => {
  return (
    <Root>
      <HeaderSection />
      <MainSection>
        <Container>
          <TypoContainer>
            <MainTypo>
              {"The digital revolution is far more significant".toUpperCase()}
            </MainTypo>
            <DescTypo>
              {"than the invention of writing or even of printing. – Douglas Engelbart, inventor of the graphical interface and the mouse".toUpperCase()}
            </DescTypo>
          </TypoContainer>
        </Container>
      </MainSection>
      <MainOfferSection>
        <Container>
          <TitleSection>
            <TitleTypo>
              What We <TitleTypoYellow>Offer</TitleTypoYellow>
            </TitleTypo>
          </TitleSection>
          <ItemCard />
        </Container>
      </MainOfferSection>
      <MainFullServiceSection>
        <Container>
          <TitleSection>
            <TitleTypoGray>
              A <TitleTypoYellow>Full-Service</TitleTypoYellow> Agency
            </TitleTypoGray>
          </TitleSection>
          <FullServiceContainer>
            <TypoSection>
              <FullServiceTypo>
                Every business is different and its marketing needs are too.
                We’ve developed a diverse range of specialised services to
                ensure success. We bring together exceptional, in-house
                expertise to deliver fast, effective results to elevate your
                business.
              </FullServiceTypo>
              <FullServiceTypoTitle>
                Our Expertise in Design & Development Softwares
              </FullServiceTypoTitle>
              <FullServiceTypo>
                Always striving toward ideals. Being true to our values. Clients
                and beyond.
              </FullServiceTypo>
              <FullServiceProgress src={ProgressBar} />
            </TypoSection>
            <FullServiceImage src={FullService} />
          </FullServiceContainer>
          <EmailImage src={Email} />
        </Container>
      </MainFullServiceSection>
    </Root>
  );
};
