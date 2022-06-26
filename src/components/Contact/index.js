import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CustomSectionHeader from "../../utils/CustomSectionHeader"
import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs"
import Fade from "react-reveal/Fade"

const Contact = () => {
  return (
    <section id="contact" className='contact'>
        <Container className="container">
            <Fade up>
            <CustomSectionHeader title="Contact us" text="" />
            </Fade>
            <Fade up>
            <Row className="mt-1 d-flex justify-content-end">
                <Col lg={5}>
                    <div className="info">
                        <div className="address">
                            <BsGeoAlt />
                            <h4>Location:</h4>
                            <p>A123 First Street, Brussel 1000, Belgium</p>
                        </div>
                        <div className="email">
                            <BsEnvelope />
                            <h4>Email:</h4>
                            <p>info@example.com</p>
                        </div>
                        <div className="phone">
                            <BsPhone />
                            <h4>Call:</h4>
                            <p>+32 254 898 58</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} className="mt-5 mt-lg-0">
                    <Form className='php-email-form'>
                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Your name" required />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mt-3 mt-md-0">
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Your email" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mt-3">
                            <Form.Control type="text" placeholder='Subject' required />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Control as="textarea" rows={5} placeholder="Message" required />
                        </Form.Group>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className='error-message'></div>
                            <div className='sent-message'>Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center">
                            <button type="submit">Send Message</button>
                        </div>
                    </Form>
                </Col>
            </Row>
            </Fade>
        </Container>
    </section>
  )
}

export default Contact