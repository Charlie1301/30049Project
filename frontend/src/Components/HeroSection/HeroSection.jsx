import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  BtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroSectionStyles";
import { Button } from "../btnStyles";
import Video from "../../Assets/video/homeBg.mp4";

const HeroSection = () => {
  const [hover, setHover] = React.useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroH1>Smart Contract Analyzer</HeroH1>
        <HeroP>Upload your smart contract to receive a comprehensive risk analysis report.</HeroP>

        <BtnWrapper>
          <Button
            to="signUp"
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            btnPrimary="true"
            btnDarkTxt="true"
            btnDarkTxtHover="true"
          >
            Upload Smart Contract {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
