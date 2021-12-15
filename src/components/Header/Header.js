import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <span>
              <span className="shown">Sale</span>
              <span className="hidden">Sale</span>
            </span>
          </NavLink>
          <NavLink href="/new" className="different">
            <span>New Releases</span>
          </NavLink>
          <NavLink href="/men">
            <span>
              <span className="shown">Men</span>
              <span className="hidden">Men</span>
            </span>
          </NavLink>
          <NavLink href="/women">
            <span>
              <span className="shown">Women</span>
              <span className="hidden">Women</span>
            </span>
          </NavLink>
          <NavLink href="/kids">
            <span>
              <span className="shown">Kids</span>
              <span className="hidden">Kids</span>
            </span>
          </NavLink>
          <NavLink href="/collections">
            <span>
              <span className="shown">Collections</span>
              <span className="hidden">Collections</span>
            </span>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  
  &:first-of-type {
    color: var(--color-secondary);
  }

  &:not(.different) {
  overflow: hidden;

    span {
      display: block;
      &.hidden {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(24px);
        font-weight: 700;
      }
    }

    > span {
      transition: transform 0.45s;
    }
    &:hover {
      > span {
        transition: transform 0.25s;
        transform: translateY(-22px);
      }
    }
  }

  &.different {
    span {
      display: block;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background: var(--color-gray-700);
        width: 100%;
        height: 5px;
        opacity: 0;
        transition: opacity 0.2s, transform 0.3s;
      }
    }
    &:hover {
      span {
        &::before {
          opacity: 1;
          transform: translateY(5px);
        }
      }
    }
  }
`;

export default Header;
