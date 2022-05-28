import React, {useState, useEffect} from 'react'
import {
  NavSection,
  TopNav,
  BottomNav,
  NavLinks,
  NavLink,
  SignUp,
} from './Nav.element'
import logo from './logo.svg'

const Nav = () => {
  return (
    <NavSection className="flex container">
      <TopNav className='flex'>
        <img src={logo} width="120px"></img>
        <NavLinks className="flex fs-13">
          <NavLink>About us</NavLink>
          <NavLink>Stores</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Log in</NavLink>
          <SignUp className="bg-orange">Sign up</SignUp>
        </NavLinks>
      </TopNav>
      <BottomNav></BottomNav>
    </NavSection>
  )
}

export default Nav