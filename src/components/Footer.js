import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.secondaryBackground};
  padding: 3rem 0;
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  margin: 0 1rem;
  color: ${props => props.theme.colors.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
          <SocialIcon href="https://www.linkedin.com/in/joegeorge022/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://github.com/joegeorge022" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="mailto:contact@joegeorge.dev" aria-label="Email">
            <FaEnvelope />
          </SocialIcon>
        </SocialIcons>
        <FooterText>
          &copy; {currentYear} Joe George. All rights reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
