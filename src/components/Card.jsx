import React from "react";
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
            <div className="card">
                {badgeText && <div className="card--badge">SOLD OUT</div>}
                <img src={process.env.PUBLIC_URL + `/Images/${props.img}`} className="card--image" alt={`${props.img}`}/>
                <div className="card--stats">
                    <img src={process.env.PUBLIC_URL + "/Images/star.png" } className="card--star" />
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
    )
}