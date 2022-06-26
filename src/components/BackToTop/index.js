import React from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"

const BackToTop = () => {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

  return (
    <>
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center active">
            <AiOutlineArrowUp onClick={goToTop} />
        </a>
    </>
  )
}

export default BackToTop