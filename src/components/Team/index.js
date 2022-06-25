import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustomSectionHeader from '../../utils/CustomSectionHeader'
import { teamInfo } from './teamInfo'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
import Fade from "react-reveal/Fade"

const title = "Team"
const text = "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."

const Team = () => {
  return (
    <section id="team" className='team'>
        <Container>
            <CustomSectionHeader title={title} text={text} />
            <Row>
                {
                    teamInfo.map(item => (
                        
                        <Col key={item.id} lg={6} className={item.id === 1 ? "" : item.id === 2 ? "mt-4 mt-lg-0" : "mt-4"}>
                            <Fade up>
                            <div className="team__member d-flex align-items-start">
                                <div className="pic">
                                    <img src={item.img} alt="team member" className="img-fluid" />
                                </div>
                                <div className="member__info">
                                    <h4>{item.name}</h4>
                                    <span>{item.position}</span>
                                    <p>{item.text}</p>
                                    <div className="social">
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaFacebookF /></a>
                                        <a href="#"><FaInstagram /></a>
                                        <a href="#"><FaLinkedin /></a>
                                    </div>
                                </div>
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

export default Team