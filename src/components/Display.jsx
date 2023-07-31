import React from "react"
import { Link } from "react-router-dom"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { ThemeProvider } from "@mui/material"
import Typography from "@mui/material/Typography"
import { colors, theme } from "../theme"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import coder from "../assets/coder.jpeg"
import resume from "../assets/resumePic.png"
import website from "../assets/aaMain.png"
import pdf from "../assets/resume_RadcliffeM.pdf"

function Display() {
  return (
    <ThemeProvider theme={theme}>
      <Container id="display">
        <Row style={{ gap: 64, marginBottom: 120 }}>
          <Col xs={6} md={4}>
            <Image src={coder} fluid style={{ border: `2px solid ${colors.grey}`, borderRadius: "4px" }} />
          </Col>
          <Col xs={6} md={4}>
            <Typography variant="h2" style={{ fontWeight: "bold", color: `${colors.primary}`, marginBottom: 24 }}>
              About Me
            </Typography>
            <Typography variant="h2" style={{ color: `${colors.primary}`, width: 664 }}>
              I am a self-taught web developer with both front and backend expertise. I started learning last year via the Odin Project and have also utilized courses hosted via Udemy. In addition to coding, I am a stay at home husband and dad, keeping up the house and caring for our preschool aged kids. When I'm not otherwise occupied I enjoy drawing and painting, playing videogames, and watching movies.
            </Typography>
          </Col>
        </Row>
        <Row style={{ gap: 64, marginBottom: 120 }}>
          <Col xs={6} md={4}>
            <Link to="https://papaya-mandazi-a72e24.netlify.app/">
              <Image src={website} fluid style={{ border: `2px solid ${colors.grey}`, borderRadius: "4px" }} />
            </Link>
          </Col>
          <Col xs={6} md={4}>
            <Typography variant="h2" style={{ fontWeight: "bold", color: `${colors.primary}`, marginBottom: 24 }}>
              Full-Stack Website Project
            </Typography>
            <Typography variant="h2" style={{ color: `${colors.primary}`, width: 664 }}>
              This project is a proof of concept for a small accounting firm. Public access includes a main page as well as a FAQ and About page. Verified users will be able to login and access a dashboard tailored to different access levels (admin, client, employee). The site is still under construction but most of the key features are already functional. Curious visitors can click the picture to the left in order to preview it.
            </Typography>
          </Col>
        </Row>
        <Row style={{ gap: 64 }}>
          <Col xs={6} md={4}>
            <Link to={pdf} target="_blank">
              <Image src={resume} fluid style={{ border: `2px solid ${colors.grey}`, borderRadius: "4px" }} />
            </Link>
          </Col>
          <Col xs={6} md={4}>
            <Typography variant="h2" style={{ fontWeight: "bold", color: `${colors.primary}`, marginBottom: 24 }}>
              Resume
            </Typography>
            <Typography variant="h2" style={{ color: `${colors.primary}`, width: 664 }}>
              The picture to the left is a link to my professional resume. I have a professional background and customer service and an academic background in history and religion. My journey to coding has not been a straight line but I have thoroughly enjoyed growing my skills and am excited to put them to use for many years to come.
            </Typography>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}

export default Display
