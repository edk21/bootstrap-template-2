import React from "react"
import { Accordion, Container } from "react-bootstrap"
import CustomSectionHeader from "../../utils/CustomSectionHeader"
import { FaRegQuestionCircle } from "react-icons/fa"
import { faqItems } from "./faqITems"
import Fade from "react-reveal/Fade"

const FAQ = () => {
    return(
        <section id="faq" className="faq">
            <Container>
                <CustomSectionHeader title="Frequenty asked questions" text="" />
                <div className="faq__list">
                    <Accordion defaultActiveKey="0">
                        {
                            faqItems.map(item => (
                                <Fade up key={item.id}>
                                <Accordion.Item eventKey={item.id - 1} className="mt-2 py-2">
                                    <Accordion.Header><FaRegQuestionCircle />{item.title} </Accordion.Header>
                                    <Accordion.Body>{item.text}</Accordion.Body>
                                </Accordion.Item>
                                </Fade>
                            ))
                        }
                    </Accordion>
                </div>
            </Container>
        </section>
    )
}

export default FAQ