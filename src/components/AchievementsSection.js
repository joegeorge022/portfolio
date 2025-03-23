import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AchievementsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const AchievementCard = styled(motion.div)`
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

const Title = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: 0.5rem;
`;

const Organization = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
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

const AchievementsSection = ({ achievements }) => {
  return (
    <AchievementsContainer>
      {achievements.map((achievement, index) => (
        <AchievementCard
          key={index}
          as={motion.div}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          <Title>{achievement.title}</Title>
          {achievement.organization && (
            <Organization>{achievement.organization}</Organization>
          )}
          <Description>{achievement.description}</Description>
        </AchievementCard>
      ))}
    </AchievementsContainer>
  );
};

export default AchievementsSection;
