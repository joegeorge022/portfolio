import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const ExperienceCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.secondaryBackground};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.boxShadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow.medium};
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const Role = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: 0.5rem;
`;

const Organization = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Period = styled.span`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: ${props => props.theme.fontSizes.sm};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    align-self: flex-start;
    margin-top: 0.5rem;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.colors.lightText};
  line-height: 1.6;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ExperienceSection = ({ experiences }) => {
  return (
    <ExperienceContainer>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          as={motion.div}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          <ExperienceHeader>
            <div>
              <Role>{experience.role}</Role>
              <Organization>{experience.organization}</Organization>
            </div>
            <Period>{experience.period}</Period>
          </ExperienceHeader>
          <Description>{experience.description}</Description>
        </ExperienceCard>
      ))}
    </ExperienceContainer>
  );
};

export default ExperienceSection;
