import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <div className="mainDiv">
            <div className="secDiv">
                <img src="/portfolio/skills.jpeg" alt="" className="skillsPic" height="250px" width="1535px" />
                <div id="textDiv">
                    <p className="text1">
                        <p> Client-Side</p>
                        <ul>
                             <img src="/portfolio/htmlLogo.jpeg" alt="" className="logo" />
                             <img src="/portfolio/cssLogo.jpeg" alt="" className="logo" />
                             <img src="/portfolio/tsLogo.png" alt="" className="logo" />
                             <img src="/portfolio/jsLogo.png" alt="" className="logo" />
                             <img src="/portfolio/reactLogo.jpeg" alt="" className="logo" />
                             <img src="/portfolio/mui.png" alt="" className="logo" />
                        </ul>
                    </p>

                    <p className="text2">
                        <ul>
                            <p>Server-Side</p>
                            <img src="/portfolio/cLogo.jpeg" alt="" className="logo" />
                            <img src="/portfolio/NodejsLogo.jpeg" alt="" className="logo" />
                            <img src="/portfolio/netcoreLogo.png" alt="" className="logo" />
                        </ul>
                    </p>


                    <p className="text3">
                        <p>environment</p>
                        <ul>
                            <img src="/portfolio/vscLogo.jpeg" alt="" className="logo" />
                            <img src="/portfolio/vcLogo.jpeg" alt="" className="logo" />
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Skills;
