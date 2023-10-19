import React from "react";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import {
  FooterContainer,
  Wrapper,
  LinksContainer,
  LinksWrapper,
  LinkItens,
  LinkTitle,
  FooterLink,
  SocialMedia,
  SMwrap,
  Logo,
  Copy,
  SocialIcons,
  IconLink
} from "./footStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        {/* LinksContainer contains different sections of links */}
        <LinksContainer>
          <LinksWrapper>
            <LinkItens>
              {/* LinkTitle is the title for this section of links */}
              <LinkTitle>About Us</LinkTitle>
              {/* FooterLink represents individual links */}
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="">Testimonials</FooterLink>
              <FooterLink to="">How it works</FooterLink>
              <FooterLink to="">Terms of Services</FooterLink>
            </LinkItens>

            <LinkItens>
              <LinkTitle>Videos</LinkTitle>
              <FooterLink to="">Agency</FooterLink>
              <FooterLink to="">Ambassadors</FooterLink>
              <FooterLink to="">Investors</FooterLink>
              <FooterLink to="">Demo</FooterLink>
            </LinkItens>
          </LinksWrapper>

          <LinksWrapper>
            <LinkItens>
              <LinkTitle>Contact Us</LinkTitle>
              <FooterLink to="">Contact</FooterLink>
              <FooterLink to="">Support</FooterLink>
              <FooterLink to="">Destinations</FooterLink>
              <FooterLink to="">Sponsors</FooterLink>
            </LinkItens>

            <LinkItens>
              <LinkTitle>Social Media</LinkTitle>
              <FooterLink to="">LinkedIn</FooterLink>
              <FooterLink to="">Instagram</FooterLink>
              <FooterLink to="">Twitter</FooterLink>
              <FooterLink to="">Facebook</FooterLink>
            </LinkItens>
          </LinksWrapper>
        </LinksContainer>

        <SocialMedia>
          <SMwrap>
            <Logo to="home">FOO</Logo>
            {/* Copy contains copyright and attribution information */}
            <Copy>
              ©️ Team 2-17 | Swinburne University of Technology
            </Copy>

            <SocialIcons>
              {/* IconLink represents social media icons with links */}
              <IconLink href="" target="_blank">
                <FaGithub />
              </IconLink>

              <IconLink href="" target="_blank">
                <FaBehance />
              </IconLink>

              <IconLink href="" target="_blank">
                <FaLinkedin />
              </IconLink>

              <IconLink href="" target="_blank">
                <BiWorld />
              </IconLink>
            </SocialIcons>
          </SMwrap>
        </SocialMedia>
      </Wrapper>
    </FooterContainer>
  );
};
export default Footer;
