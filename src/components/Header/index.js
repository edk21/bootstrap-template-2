import React,{useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose, AiFillCaretRight, AiFillCaretDown } from "react-icons/ai"
import "../../styles/index.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [drop, setDrop] = useState(false)
  const [deepDrop, setDeepDrop] = useState(false)
  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

  const handleOpen = () => {
    setIsOpen(!isOpen)
    if(drop){
      setDrop(false)
    }
    if(deepDrop){
      setDeepDrop(false)
    }
  }
  const handleDrop = () => {
    setDrop(!drop)
  }
  const handleDeepDrop = () => {
    setDeepDrop(!deepDrop)
  }

  useEffect(()=> {
    const DebouncedHandleResize = debounce(function handleResize(){
      setDimension({
        height: window.innerHeight,
        width: window.innerWidth 
      })
    }, 1000)

    window.addEventListener("resize", DebouncedHandleResize)

    return _=>{
      window.removeEventListener("resize", DebouncedHandleResize)
    }
  })
  useEffect(()=> {
    if(dimension.width > "992px"){
      setIsOpen(false)
      setDrop(false)
      setDeepDrop(false)
    }
  },[dimension])

  return (
    <header id="header">
     <Container fluid className="px-5 py-4 d-flex justify-content-between align-items-center wrapper">
      <a href="#topbar" className="logo">anyar</a>
      <div className="dropdownBtn" onClick={()=> handleOpen()}>
      {
            isOpen ? <AiOutlineClose className="fs-1 close" /> : <FaBars className="fs-1" />
      }
      </div>

      <nav className={isOpen ? "mobile" : "desktop"}>
        <ul className=''>
          <li className='one'><a className='' href="#topbar">Home</a></li>
          <li className='one'><a href="#about">About</a></li>
          <li className='one'><a href="#services">Services</a></li>
          <li className='one'><a href="#portfolio">Portfolio</a></li>
          <li className='one'><a href="#team">Team</a></li>
          <li className='one'><a href="#pricing">Pricing</a></li>
          <li className='one'><a href="#blog">Blog</a></li>
          <li className='liDrop one'><a href="#n" onClick={() => handleDrop()}>Dropdown {drop ? <AiFillCaretDown /> : <AiFillCaretRight />}</a>
            <ul className={drop ? "drop" : "noDrop"}>
              <li className='two'><a href="#">Drop Down 1</a></li>
              <li className='liDeepDrop two'><a href="#n" onClick={() => handleDeepDrop()}>Deep Drop 2{deepDrop ? <AiFillCaretDown /> : <AiFillCaretRight />}</a>
                <ul className={deepDrop ? "deepDrop" : "noDrop"}>
                  <li><a href="#">Deep Drop 1</a></li>
                  <li><a href="#">Deep Drop 2</a></li>
                  <li><a href="#">Deep Drop 3</a></li>
                  <li><a href="#">Deep Drop 4</a></li>
                  <li><a href="#">Deep Drop 5</a></li>
                </ul>
              </li>
              <li className='two'><a href="#">Drop Down 3</a></li>
              <li className='two'><a href="#">Dop Down 4</a></li>
              <li className='two'><a href="#">Drop Down 5</a></li>
            </ul>
          </li>
          
          <li className='one'><a href="#contact">Contact</a></li>
        </ul>
      </nav>
     </Container>
    </header>
  )
}

export default Header