import React from "react";

function Bill(props) {
    console.log(props); 
    return (
        <img className="bill-image" src={props.img} alt={props.name} />
    );

}

export default Bill;