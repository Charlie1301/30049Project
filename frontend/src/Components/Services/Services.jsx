import React from "react";

import {
  ServicesContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P
} from "./serviStyles";

import Icon1 from "../../Assets/img/svg-1.png";
import Icon2 from "../../Assets/img/svg-5.png";
import Icon3 from "../../Assets/img/svg-4.png";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <H1>Our Services</H1>
      <Wrapper>
        <Card>
          <Icon src={Icon1} />
          <H2>Reduce expenses</H2>
          <P>
            We help you reduce your fees and increase your overall revenue! 😉
          </P>
        </Card>

        <Card>
          <Icon src={Icon2} />
          <H2>Virtual offices</H2>
          <P>Access our platform anywhere in the world! 🌎</P>
        </Card>

        <Card>
          <Icon src={Icon3} />
          <H2>Premium Benefits</H2>
          <P>Unlock our exclusive debit/credit card with 10% of cashback! 🤑</P>
        </Card>
      </Wrapper>
    </ServicesContainer>
  );
};

export default Services;
