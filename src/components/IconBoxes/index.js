import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import { FaBasketballBall, FaFileAlt, FaTachometerAlt, FaLayerGroup } from "react-icons/fa"
import { iconboxItems } from "./iconBoxItems"
import Fade from "react-reveal/Fade"

const IconBoxes = () => {
  return (
    <section id="icon__boxes" className="icon__boxes">
        <Container>
            <Row>
                {
                    iconboxItems.map(item => (
                        
                        <Col key={item.id} md={6} lg={3} className="d-flex align-items-stretch mb-5 mb-lg-0">
                            <Fade up>
                                <div className="icon__box">
                                    <div className="icon">
                                        {
                                            item.id === 1 ? <FaBasketballBall /> :
                                            item.id === 2 ? <FaFileAlt /> :
                                            item.id === 3 ? <FaTachometerAlt /> :
                                            item.id === 4 ? <FaLayerGroup /> : null
                                        }
                                    </div>
                                    <h4 className="title">{item.title}</h4>
                                    <p className="description">{item.text}</p>
                                </div>
                            </Fade>
                        </Col>
                        
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default IconBoxes