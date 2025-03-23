import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { profileData } from '../data/profileData';

// Components
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import AchievementsSection from '../components/AchievementsSection';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  position: relative;
  padding: 0 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const HeroTextContent = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: none;
  box-shadow: ${props => props.theme.boxShadow.medium};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 250px;
    height: 250px;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: ${props => props.theme.fontSizes['5xl']};
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const HeroTitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  max-width: 800px;
  line-height: 1.5;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
    margin: 0 auto 1rem auto;
  }
`;

const HeroBio = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 2rem;
  max-width: 700px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.md};
    margin: 0 auto 2rem auto;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['3xl']};
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -12px;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTextContent>
            <HeroHeading
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {profileData.name}
            </HeroHeading>
            
            <HeroTitle
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {profileData.title}
            </HeroTitle>
            
            <HeroBio
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {profileData.bio}
            </HeroBio>
            
            <SocialLinks
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  <SocialLink 
    href={profileData.contact.linkedin}
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </SocialLink>
  <SocialLink 
    href={profileData.contact.github}
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </SocialLink>
</SocialLinks>

          </HeroTextContent>
          
          <ProfileImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ProfileImage src="/joe.jpg" alt="Joe George" />
          </ProfileImageContainer>
        </HeroContent>
      </HeroSection>
      
      <SectionContainer as="section" id="experience">
        <SectionTitle>Experience</SectionTitle>
        <ExperienceSection experiences={profileData.experience} />
      </SectionContainer>
      
      <SectionContainer as="section" id="skills" style={{ backgroundColor: '#f5f8fa' }}>
        <SectionTitle>Skills</SectionTitle>
        <SkillsSection skills={profileData.skills} />
      </SectionContainer>
      
      <SectionContainer as="section" id="education">
        <SectionTitle>Education</SectionTitle>
        <EducationSection education={profileData.education} />
      </SectionContainer>
      
      <SectionContainer as="section" id="achievements" style={{ backgroundColor: '#f5f8fa' }}>
        <SectionTitle>Achievements</SectionTitle>
        <AchievementsSection achievements={profileData.achievements} />
      </SectionContainer>
    </>
  );
};

export default Home;
