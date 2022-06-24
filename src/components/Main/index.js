import React from "react"
import About from "../About"
import Clients from "../Clients"
import IconBoxes from "../IconBoxes"
import Services from "../Services"
import WhyUs from "../WhyUs"

const Main = () => {
    return(
        <main id="main">
            <IconBoxes />
            <About />
            <Clients />
            <WhyUs />
            <Services />
        </main>
    )
}

export default Main