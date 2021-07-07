import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <div className="mainDiv">
            <div className="secDiv">
                <img src="skills.jpeg" alt="" className="skillsPic" height="250px" width="1535px" />
                <div id="textDiv">
                    <p className="text1">
                        <p> Client-Side</p>
                        <ul>
                             <img src="htmlLogo.jpeg" alt="" className="logo" />
                             <img src="cssLogo.jpeg" alt="" className="logo" />
                             <img src="tsLogo.png" alt="" className="logo" />
                             <img src="jsLogo.png" alt="" className="logo" />
                             <img src="reactLogo.jpeg" alt="" className="logo" />
                             <img src="mui.png" alt="" className="logo" />
                        </ul>
                    </p>

                    <p className="text2">
                        <ul>
                            <p>Server-Side</p>
                            <img src="cLogo.jpeg" alt="" className="logo" />
                            <img src="NodejsLogo.jpeg" alt="" className="logo" />
                            <img src="netcoreLogo.png" alt="" className="logo" />
                        </ul>
                    </p>


                    <p className="text3">
                        <p>environment</p>
                        <ul>
                            <img src="vscLogo.jpeg" alt="" className="logo" />
                            <img src="vcLogo.jpeg" alt="" className="logo" />
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Skills;
