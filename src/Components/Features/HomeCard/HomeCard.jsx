import React from 'react';


function HomeCard(props) {
    const { title, image, text, secImage} = props;
    
    return (
        <div>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <h2 className="frontH2">{title}</h2>
                        <img src={image} alt="" className="frontPic" />
                    </div>
                    <div class="flip-box-back">
                        <p>{text}</p>
                        <img src={secImage} alt="" className="backPic" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeCard;