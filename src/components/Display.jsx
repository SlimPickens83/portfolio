import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import blank from "../assets/blank.png"

function Display() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={blank} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={blank} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={blank} thumbnail />
        </Col>
      </Row>
    </Container>
  )
}

export default Display
