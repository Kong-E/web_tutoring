import {
  Card,
  CardContainer,
  CardDescTypo,
  CardImage,
  CardTitleTypo,
  CardTypo,
  CardTypoButton,
  CardTypoContainer,
  Root,
} from "./styled";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";
import image7 from "../../assets/images/image7.png";
import image8 from "../../assets/images/image8.png";
import image9 from "../../assets/images/image9.png";
import image10 from "../../assets/images/image10.png";
import arrow from "../../assets/icon/arrow-right.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

export const ItemCard = () => {
  return (
    <>
      <CardContainer>
        {images.map((item) => (
          <Card>
            <CardImage src={item} />
            <CardTypoContainer>
              <CardTitleTypo>Logo Design</CardTitleTypo>
              <CardDescTypo>
                Need a quality, custom logo? Our team will create a stunning,
                original design for you that will make your business stand out
                from the ...
              </CardDescTypo>
              <CardTypoButton>
                Learn More　
                <img src={arrow} width="20px" height="20px" alt="arrow" />
              </CardTypoButton>
            </CardTypoContainer>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};
