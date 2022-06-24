import React from "react"
import About from "../About"
import Clients from "../Clients"
import CTA from "../CTA"
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
            <CTA />
        </main>
    )
}

export default Main