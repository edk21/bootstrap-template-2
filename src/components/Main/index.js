import React from "react"
import About from "../About"
import Clients from "../Clients"
import CTA from "../CTA"
import IconBoxes from "../IconBoxes"
import Portfolio from "../Portfolio"
import Pricing from "../Pricing"
import Services from "../Services"
import Team from "../Team"
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
            <Portfolio />
            <Team />
            <Pricing />
        </main>
    )
}

export default Main