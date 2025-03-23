import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.scrolled ? props.theme.colors.secondaryBackground : 'transparent'};
  padding: 1.5rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  box-shadow: ${props => props.scrolled ? props.theme.boxShadow.light : 'none'};
`;

const Logo = styled(Link)`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 250px;
    height: 100vh;
    background-color: ${props => props.theme.colors.secondaryBackground};
    padding-top: 60px;
    transition: all 0.3s ease-in-out;
    box-shadow: ${props => props.theme.boxShadow.medium};
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin: 1.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <Logo to="/">Joe George</Logo>
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      
      <NavMenu isOpen={isOpen}>
        <CloseIcon onClick={toggleMenu}>
          <FaTimes />
        </CloseIcon>
        
        <NavItem>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
