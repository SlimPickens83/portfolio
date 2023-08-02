import React from "react"
import { Link } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { Typography } from "@mui/material"
import { colors, theme } from "../theme"
import Tech from "./Tech"

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Tech />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <footer>
          <Typography variant="h5" style={{ color: colors.primary }}>
            <Link to="/">Project</Link> | <Link to="/about">Resume</Link>
          </Typography>
          <Typography variant="h6" style={{ color: colors.primary }}>
            Images via <a href="https://www.freepik.com/">Freepik</a>
          </Typography>
          <Typography variant="h6" className="m-0" style={{ color: colors.primary }}>
            Copyright &copy; {new Date().getFullYear()} Redcliffe Design. All rights reserved.
          </Typography>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Footer
