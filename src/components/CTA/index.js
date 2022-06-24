import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from "react-reveal/Fade"
import ctaBg from "../../assets/cta-bg.jpg"

const CTA = () => {
  return (
    <section id="cta" className='cta' style={{ background: `linear-gradient(rgba(5, 74, 133, 0.8), rgba(5, 74, 133, 0.9)), url(${ctaBg}) fixed center center` }}>
        <Container>
            <Fade up>
            <Row>
                <Col lg={9} className="text-center text-lg-start">
                    <h3>Call to action</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col lg={3} className="cta__btnContainer text-center">
                    <a href="#" className="cta__btn align-middle">Call To Action</a>
                </Col>
            </Row>
            </Fade>
        </Container>
    </section>
  )
}

export default CTA