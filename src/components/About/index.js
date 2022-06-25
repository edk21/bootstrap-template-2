import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Fade from "react-reveal/Fade"
import { BsCheckAll } from "react-icons/bs"
import CustomSectionHeader from '../../utils/CustomSectionHeader'
const title = "About Us"
const text = "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."

const About = () => {
  return (
    <div id="about" className="about">
        <Container>
          <Fade up>
            <CustomSectionHeader title={title} text={text} />
            <Row className="about__content">
              <Col lg={6}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                <li><BsCheckAll />Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                <li><BsCheckAll />Duis aute irure dolor in reprehenderit in voluptate velit</li>
                <li><BsCheckAll />Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                </ul>
              </Col>
              <Col lg={6} className="pt-4 pt-lg-0">
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="#" className="btn-learn-more">Learn More</a>
              </Col>
            </Row>
          </Fade>
        </Container>
    </div>
  )
}

export default About