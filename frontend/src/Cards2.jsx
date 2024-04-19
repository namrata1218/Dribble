    import React from "react";
    import cards2 from "./data/cards2.json"
    const Cards2=()=>{
        return(
            <>
            <div className="container-about">
            <h2>
                Explore inspiring designs</h2></div>
                <div className="design-container">
                    {cards2.map((data)=>(  
                        <div className="flip-card">
                    <div className="designs flip-card-inner">
                        <div className="flip-card-front">
                        <img src={data.design} alt="" />
                        <div> 
                        <p>{data.name}</p>
                        </div></div>
                        </div>
                       
                        </div>))}
                        </div></>

        )
    }
    export default Cards2;