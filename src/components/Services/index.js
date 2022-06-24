import React from 'react'
import {Col, Container, Row} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { BsCardChecklist, BsBarChart, BsBinoculars, BsBrightnessHigh, BsCalendarWeek, BsBriefcase } from "react-icons/bs"
import { servicesItems } from "./servicesItems"

const Services = () => {
  return (
    <section id="services" className='services'>
      <Container>
        <Fade up>
          <div className="services__title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <Row>
              {
                servicesItems.map(item => (
                  
                  <Col md={6} className={item.id !== 1 ? "d-flex align-items-stretch mt-4 mt-md-0" : "d-flex align-items-stretch"}>
                  <Fade up>
                    <div key={item.id} className="icon-box">
                      {
                        item.id === 1 ? <BsCardChecklist /> : 
                        item.id === 2 ? <BsBarChart /> : 
                        item.id === 3 ? <BsBinoculars /> : 
                        item.id === 4 ? <BsBrightnessHigh /> : 
                        item.id === 5 ? <BsCalendarWeek /> : 
                        item.id === 6 ? <BsBriefcase /> : null
                      }
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </Fade>
                </Col>
                
                ))
              }
          </Row>
        </Fade>
      </Container>
    </section>
  )
}

export default Services