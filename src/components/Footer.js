import {Col, Container, Row} from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {Newsletter} from "./Newsletter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter/>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.google.com"><img src={navIcon1} alt=""/></a>
              <a href="https://www.google.com"><img src={navIcon2} alt=""/></a>
              <a href="https://www.google.com"><img src={navIcon3} alt=""/></a>
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
