import React from "react"

const Container = {
    textAlign: "center",
    paddingBottom: "30px"
};
const h2 = {
    fontSize: "32px",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "20px",
    paddingBottom: "20px",
    color: "#054a85",
};
const p = {
    marginBottom: "0",
    fontStyle: "italic"
};

const CustomSectionHeader = ({title, text}) => {
    return(
        <div style={Container}>
            <h2 style={h2}>{title}</h2>
            <p style={p}>{text}</p>
        </div>
    )
}

export default CustomSectionHeader