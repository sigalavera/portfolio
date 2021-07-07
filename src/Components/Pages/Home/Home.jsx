import React, { useState } from 'react';
import './Home.css';
import HomeCard from '../../Features/HomeCard/HomeCard';

function Home() {
    const [info, setInfo] = useState("let`s get to know me");

    return (
        <div className="totalDiv">
            <div className="themeDiv">
                <img src="/portfolio/tphoto.jpeg" alt="themePic" className="themePic" 
                onClick={() => setInfo("My name is Siglit Avera, i`m 24 years old and i`m a Fullstack Developer. Experienced in teamwork, serious, responsible and has good communication.\n Experienced in working with customers and providing service.")} />
                <p className="bgHomeP"> {info} </p>
            </div>
            <div className="cardClass">
                <HomeCard
                    title="Use Effect"
                    image="/portfolio/headerPic.jpeg"
                    text="This presentation explained the use of Use Effect, the similarity of UseLayOutEffect to Use Effect, presented 2 examples and detailed the differences between them."
                    secImage="/portfolio/me1.jpeg" />

                <HomeCard
                    title="Repaint"
                    image="/portfolio/headerPic.jpeg"
                    text="This presentation explained the DOM and the memory structure it creates, the effectiveness of the VIRTUAL DOM and its modes of expression along with REACT.
                    A comparison was made between the two and an example was presented that explains behind-the-scenes rendering.
                    And finally explained the Repaint process and how it is expressed in VIRTUAL DOM."
                    secImage="/portfolio/me2.jpeg" />
            </div>
        </div>

    )
}
export default Home;