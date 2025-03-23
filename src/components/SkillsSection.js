import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background-color: ${props => props.theme.colors.secondaryBackground};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 1.5rem;
  box-shadow: ${props => props.theme.boxShadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow.medium};
  }
`;

const CategoryTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const SkillsList = styled.ul`
  list-style: none;
`;

const SkillItem = styled.li`
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  
  &:before {
    content: '•';
    color: ${props => props.theme.colors.primary};
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const SkillsSection = ({ skills }) => {
  return (
    <SkillsContainer as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <SkillCategory variants={itemVariants}>
        <CategoryTitle>Programming Languages</CategoryTitle>
        <SkillsList>
          {skills.programming.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </SkillCategory>
      
      <SkillCategory variants={itemVariants}>
        <CategoryTitle>Frameworks & Libraries</CategoryTitle>
        <SkillsList>
          {skills.frameworks.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </SkillCategory>
      
      <SkillCategory variants={itemVariants}>
        <CategoryTitle>Tools & Platforms</CategoryTitle>
        <SkillsList>
          {skills.tools.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </SkillCategory>
      
      <SkillCategory variants={itemVariants}>
        <CategoryTitle>Other Skills</CategoryTitle>
        <SkillsList>
          {skills.other.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </SkillCategory>
    </SkillsContainer>
  );
};

export default SkillsSection;
