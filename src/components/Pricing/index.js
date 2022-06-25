import React from 'react'
import {Col, Container, Row} from "react-bootstrap"
import CustomSectionHeader from "../../utils/CustomSectionHeader"
import { pricingInfo } from './pricingInfo'
import Fade from "react-reveal/Fade"

const title= "pricing"
const text = "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."

const Pricing = () => {
    return (
        <section id="pricing" className='pricing'>
            <Container>
                <CustomSectionHeader title={title} text={text} />
                <Row>
                    {
                        pricingInfo.map(item => (
                            
                            <Col key={item.id} lg={3} md={6}
                                className={item.id === 2 ? "mt-4 mt-md-0" : item.id >= 3 ? "mt-4 mt-lg-0" : ""}
                            >
                                <Fade up>
                                <div className={item.id === 2 ? "box featured" : "box"}>
                                    <span className={item.id === 4 ? "advanced" : "d-none"}>Advanced</span>
                                    <h3>{item.title}</h3>
                                    <h4><sup>€</sup>{item.amount}<span> / month</span></h4>
                                    <ul>
                                        <li>{item.text1}</li>
                                        <li>{item.text2}</li>
                                        <li>{item.text3}</li>
                                        <li className={item.id === 1 ? "na" :""}>{item.text4}</li>
                                        <li className={item.id <= 2 ? "na" : ""}>{item.text5}</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="#" className='btn-buy'>Buy Now</a>
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

export default Pricing
