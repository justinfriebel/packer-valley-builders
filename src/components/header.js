import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLogo to="/">{siteTitle}</StyledLogo>
    <StyledNav>
      <StyledMenuItemsWrapper>
        <StyledMenuItem to="/about">About</StyledMenuItem>
        <StyledMenuItem to="/services">Services</StyledMenuItem>
        <StyledMenuItem to="/projects">Projects</StyledMenuItem>
        <StyledMenuItem to="/contact">Contact</StyledMenuItem>
      </StyledMenuItemsWrapper>
    </StyledNav>
  </StyledHeader>
)

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
  background-color: #0c5900;
`

const StyledLogo = styled(Link)`
  color: #b8b233;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.25rem;
  line-height: 1.1;
`

const StyledNav = styled.nav`
  margin-left: auto;
  line-height: 1.1;
`

const StyledMenuItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

const StyledMenuItem = styled(Link)`
  margin-left: 16px;
  list-style: none;
  margin-bottom: 0px;
  color: #fff;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  line-height: 1.1;
`

export default Header
