import React from 'react'
import { Container } from 'react-bootstrap'
import { BsEnvelopeFill, BsFillPhoneFill } from "react-icons/bs"

const Topbar = () => {
  return (
    <div className='topbar py-4' id="topbar">
      <Container className="d-flex align-items-center justify-content-center">
        <div className="topbar__left">
          <div className="left">
              <BsEnvelopeFill />
              <a href="#top">info@exemple.com</a>
          </div>
          <div className="right">
                <BsFillPhoneFill />
              <a href="#top">+32 254 789 654</a>
          </div>
        </div>
        <a href="#top" className='topbar__btn'>Get Started</a>
      </Container>
    </div>
  )
}

export default Topbar