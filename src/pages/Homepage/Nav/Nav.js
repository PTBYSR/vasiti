import React, {useState, useEffect} from 'react'
import {
  NavSection,
  TopNav,
  BottomNav,
  NavWrapper,
  NavWrapper2,
  NavLinks,
  NavLinks2,
  NavLink,
  SignUp,
} from './Nav.element'
import logo from './logo.svg'

const Nav = () => {
  return (
    <NavSection className="flex">
      <NavWrapper>
        <TopNav className='flex'>
          <img src={logo} width="120px"></img>
          <NavLinks className="flex fs-13 ff-robot">
            <NavLink>About us</NavLink>
            <NavLink>Stores</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Log in</NavLink>
            <SignUp className="bg-orange uppercase">Sign up</SignUp>
          </NavLinks>
        </TopNav>
      </NavWrapper>
      <NavWrapper2>
        <BottomNav className="flex">
        <NavLinks2 className="flex fs-13 ff-roboto">
            <NavLink>marketplace</NavLink>
            <NavLink>wholesale center</NavLink>
            <NavLink>seller center</NavLink>
            <NavLink>services</NavLink>
            <NavLink>internships</NavLink>
            <NavLink>events</NavLink>
          </NavLinks2>
        </BottomNav>
      </NavWrapper2>
    </NavSection>
  )
}

export default Nav