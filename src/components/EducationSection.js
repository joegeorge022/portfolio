import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const EducationCard = styled(motion.div)`
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

const Degree = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: 0.5rem;
`;

const Field = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Institution = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.lightText};
`;

const Year = styled.span`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-left: 1rem;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const EducationSection = ({ education }) => {
  return (
    <EducationContainer>
      {education.map((edu, index) => (
        <EducationCard
          key={index}
          as={motion.div}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          <Degree>
            {edu.degree}
            {edu.year && <Year>{edu.year}</Year>}
          </Degree>
          <Field>{edu.field}</Field>
          {edu.institution && <Institution>{edu.institution}</Institution>}
        </EducationCard>
      ))}
    </EducationContainer>
  );
};

export default EducationSection;
