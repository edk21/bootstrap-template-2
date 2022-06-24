import React,{useState, useEffect} from 'react'
import {Col, Container, Row} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import Slide from "react-reveal/Slide"
import { portfolioItems } from './portfolioItems'
import { BsPlusLg, BsLink45Deg } from "react-icons/bs"

const Portfolio = () => {
    const [all] = useState(portfolioItems)
    const [app, setApp] = useState([])
    const [web, setWeb] = useState([])
    const [card, setCard] = useState([])
    const [idx1, setIdx1] = useState(true)
    const [idx2, setIdx2] = useState(false)
    const [idx3, setIdx3] = useState(false)
    const [idx4, setIdx4] = useState(false)

    const handleClick1 = () => {
        setIdx1(true);
        setIdx2(false);
        setIdx3(false);
        setIdx4(false);
    }
    const handleClick2 = () => {
        setIdx1(false);
        setIdx2(true);
        setIdx3(false);
        setIdx4(false);
    }
    const handleClick3 = () => {
        setIdx1(false);
        setIdx2(false);
        setIdx3(true);
        setIdx4(false);
    }
    const handleClick4 = () => {
        setIdx1(false);
        setIdx2(false);
        setIdx3(false);
        setIdx4(true);
    }

    useEffect(()=> {
        setApp(all.filter(item => item.title2 === "App"))
        setWeb(all.filter(item => item.title2 === "Web"))
        setCard(all.filter(item => item.title2 === "Card"))
    }, [all])

  return (
    <section id="portfolio" className='portfolio'>
        <Container>
            <Fade up>
                <div className="portfolio__title">
                    <h2>portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <Row lg={12} className="d-flex justify-content-center">
                    <ul id="portfolio__filters">
                        <li className={idx1 ? 'filter-active' : ""} onClick={handleClick1}>All</li>
                        <li className={idx2 ? 'filter-active' : ""} onClick={handleClick2}>App</li>
                        <li className={idx3 ? 'filter-active' : ""} onClick={handleClick3}>Card</li>
                        <li className={idx4 ? 'filter-active' : ""} onClick={handleClick4}>Web</li>
                    </ul>
                </Row>
                {
                    idx1 ? (
                        <Zoom>
                        <Row className="portfolio__container">
                              {
                                  all.map(item => (
                                      <Col key={item.id} lg={4} md={6} className="portfolio__item filter-app">
                                          <img className='img-fluid' src={item.img} alt="" />
                                          <div className="portfolio__info">
                                              <h4>{item.title1}</h4>
                                              <p>{item.title2}</p>
                                              <a href="#" className="portfolio__previewLink"><BsPlusLg /></a>
                                              <a href="#" className='portfolio__detailLink'><BsLink45Deg /></a>
                                          </div>
                                      </Col>
                                  ))
                              }
                        </Row>
                        </Zoom>
                    ) : 
                    idx2 ? (  
                              <Fade left>
                              <Row className="portfolio__container">
                                  {
                                      app.map(item => (
                                        
                                          <Col ley={item.id} lg={4} md={6} className="portfolio__item filter-app">
                                              <img className='img-fluid' src={item.img} alt="" />
                                              <div className="portfolio__info">
                                                  <h4>{item.title1}</h4>
                                                  <p>{item.title2}</p>
                                              </div>
                                          </Col>
                                          
                                      ))
                                  }
                              </Row>
                              </Fade>
                    ) : 
                    idx3 ? (
                        <Slide bottom>
                            <Row className="portfolio__container">
                                {
                                    web.map(item => (
                                        <Col ley={item.id} lg={4} md={6} className="portfolio__item filter-app">
                                            <img className='img-fluid' src={item.img} alt="" />
                                            <div className="portfolio__info">
                                                <h4>{item.title1}</h4>
                                                <p>{item.title2}</p>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Slide>
                    ) : ( 
                        <Fade right>
                            <Row className="portfolio__container">
                                {
                                    card.map(item => (
                                        <Col ley={item.id} lg={4} md={6} className="portfolio__item filter-app">
                                            <img className='img-fluid' src={item.img} alt="" />
                                            <div className="portfolio__info">
                                                <h4>{item.title1}</h4>
                                                <p>{item.title2}</p>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Fade>
                    )
                }                
            </Fade>
        </Container>
    </section>
  )
}

export default Portfolio