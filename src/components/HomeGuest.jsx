import React, { useState } from "react"
import PropTypes from "prop-types"
import { colors, theme } from "../theme"

// mui imports
import { ThemeProvider } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Slide from "@mui/material/Slide"

// react-bootstrap imports
import Dropdown from "react-bootstrap/Dropdown"

// images
import logo from "../assets/rdLogo_noText.png"
import pdf from "../assets/resume_RadcliffeM.pdf"

// components
import Display from "./Display"
import Tech from "./Tech"
import Footer from "./Footer"

function ScrollHide(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

ScrollHide.propTypes = {
  children: PropTypes.element.isRequired
}

function HomeGuest(props) {
  return (
    <ThemeProvider theme={theme} breakpoints={["sm", "md", "lg", "xl"]} minBreakpaoint="xs">
      <CssBaseline />
      <ScrollHide {...props}>
        <AppBar>
          <Toolbar sx={{ backgroundColor: "white" }} id="toolbar">
            <img src={logo} height="44" width="44" />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: colors.primary }}></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="https://github.com/SlimPickens83">GitHub</Dropdown.Item>
                <Dropdown.Item href="https://www.linkedin.com/in/michael-radcliffe-a2a442283/">LinkedIn</Dropdown.Item>
                <Dropdown.Item href="https://papaya-mandazi-a72e24.netlify.app/">Full Stack Project</Dropdown.Item>
                <Dropdown.Item href={pdf} target="_blank">
                  Resume
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Toolbar>
        </AppBar>
      </ScrollHide>
      <Toolbar />
      <Container id="main">
        <div style={{ marginLeft: 48 }}>
          <Typography variant="h1" color={colors.primary} style={{ fontWeight: "bold", marginTop: 56 }}>
            Mike Radcliffe
          </Typography>
          <Typography variant="h2" style={{ marginBottom: 100 }}>
            Full Stack Web Developer
          </Typography>
        </div>
        <Display />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default HomeGuest
