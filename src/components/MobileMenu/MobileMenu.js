/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink i={0} href="/sale">Sale</NavLink>
          <NavLink i={1} href="/new">New&nbsp;Releases</NavLink>
          <NavLink i={2} href="/men">Men</NavLink>
          <NavLink i={3} href="/women">Women</NavLink>
          <NavLink i={4} href="/kids">Kids</NavLink>
          <NavLink i={5} href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink i={6} href="/terms">Terms and Conditions</SubLink>
          <SubLink i={7} href="/privacy">Privacy Policy</SubLink>
          <SubLink i={8} href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slide = keyframes`
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  animation: ${appear} 0.6s;
  animation-fill-mode: forwards;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  animation: ${slide} 0.25s cubic-bezier(0, 0, 0.65, 1.23);
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  `;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  
  /* each link has an (incremental) i value passed in props */
  /* use that index for orchestration */
  animation: ${appear} 0.2s;
  animation-delay: calc(${(props) => props.i * 0.075}s + 0.2s);
  animation-fill-mode: both;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;

  animation: ${appear} 0.2s;
  animation-delay: calc(${(props) => props.i * 0.075}s + 0.2s);
  animation-fill-mode: both;
`;

export default MobileMenu;
