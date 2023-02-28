import React from "react";
import photogrid from "../images/photo-grid.png";
export default function Hero(){
    return<>
    <section className="hero">
    <img src={photogrid} className='hero-photo'></img>
    <h2 className="hero-textone">Online Experiences</h2>
    <p className="hero-texttwo">Join unique interactive activities led by one-of-a kind hosts-all without leaving home</p>
    </section>
    
    </>
    
}