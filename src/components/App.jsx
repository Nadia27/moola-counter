import React from "react";
import Bill from "./Bill";
import money from "../money"; 

//console.log(money); 


function showCurrency(denomination) {
    return (
        <Bill
        key={denomination.key}
        name={denomination.name}
        value={denomination.value}
        img={denomination.image}
        />
    );

}

function App() {
    return (
        <div className="container">
            <h1>Moola Counter</h1>
            {money.map(showCurrency)}
        </div>
    );
}

export default App;