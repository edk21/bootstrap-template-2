import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { MdKeyboardArrowRight } from "react-icons/md"
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer id="footer" className='footer'>
        <div className="footer__newsletter">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h4>Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    </Col>
                    <Col lg={6}>
                        <Form className="form">
                            <input type="email" name="email" />
                            <input type="submit" value="Subscribe" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="footer__top">
            <Container>
                <Row>
                    <Col lg={3} md={6} className="footer__top__links">
                        <h4>Usefull links</h4>
                        <ul>
                            <li><MdKeyboardArrowRight /><a href="#home">Home</a></li>
                            <li><MdKeyboardArrowRight /><a href="#about">About Us</a></li>
                            <li><MdKeyboardArrowRight /><a href="#services">Services</a></li>
                            <li><MdKeyboardArrowRight /><a href="#home">Terms of service</a></li>
                            <li><MdKeyboardArrowRight /><a href="#home">Privacy policy</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} className="footer__top__links">
                          <h4>Our Services</h4>
                          <ul>
                              <li><MdKeyboardArrowRight /><a href="#home">Web Design</a></li>
                              <li><MdKeyboardArrowRight /><a href="#about">Web Development</a></li>
                              <li><MdKeyboardArrowRight /><a href="#services">Product Management</a></li>
                              <li><MdKeyboardArrowRight /><a href="#home">Marketing</a></li>
                              <li><MdKeyboardArrowRight /><a href="#home">Graphic Design</a></li>
                          </ul>
                    </Col>
                    <Col lg={3} md={6} className="footer__top__contact">
                        <h4>Contact Us</h4>
                        <p>A103 First Street <br /> Brussels, 1000 BXL <br /> Belgium <br /> <br /> <strong className="mr-2">Pnone:</strong>+32 2 547 896 <br /> <strong className="mr-2">Email:</strong>info@example.com <br/></p>
                    </Col>
                    <Col lg={3} md={6} className="footer__top__info">
                        <h3>About Anyar</h3>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                        <div className="social__links mt-3">
                            <a href=""><FaTwitter /></a>
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaInstagram /></a>
                              <a href=""><FaSkype /></a>
                            <a href=""><FaLinkedinIn /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="footer__bottom">
            <Container>
                <div className="copyright">
                    &#169; Copyright <strong>. all Rights Reserved</strong>
                </div>
                <div className="credits">
                    Designed By <strong>Ed k.</strong>
                </div>
            </Container>
        </div>
    </footer>
  )
}

export default Footer