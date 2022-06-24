import React from 'react'
import {Container, Row, Col, Accordion} from "react-bootstrap"
import bgImage from "../../assets/why-us.jpg"
import Fade from "react-reveal/Fade"
import { accordion } from './accordion'

const WhyUs = () => {

  return (
    <section id="whyus" className='whyus'>
        <Container fluid>
            <Fade up>
            <Row>
                <Col lg={5} className="align-items-stretch position-relative video-box" style={{backgroundImage: `url(${bgImage})`}}>
                    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"> </a>
                </Col>
                <Col lg={7} className="d-flex flex-column justify-content-center align-items-stretch">
                    <Fade up>
                    <div className="content mb-xl-0 pb-lg-0">
                        <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                    </div>
                    </Fade>
                    <Accordion defaultActiveKey='0' className="accordion-list">
                        {
                            accordion.map(item => (
                                <Fade up>
                                <Accordion.Item eventKey={item.id - 1} key={item.id} className="my-3 mt-xl-0">
                                    <Accordion.Header>
                                        <span style={{ paddingRight: "10px", fontSize: "18px", fontWeight: "600", color: "#0880e8" }}>0{item.id}</span>{item.title}
                                    </Accordion.Header>
                                    <Accordion.Body>{item.text}</Accordion.Body>
                                </Accordion.Item>
                                </Fade>
                            ))
                        }
                    </Accordion>
                </Col>
            </Row>
            </Fade>
        </Container>
    </section>
  )
}

export default WhyUs