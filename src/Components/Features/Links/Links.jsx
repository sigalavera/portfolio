import React from 'react';
import {Link} from 'react-router-dom';

function Links() {
    return (
        <div>
            <Link to="/"> Home </Link> 
            <Link to="/Skills"> Skills </Link> 
            <Link to="/Protfolio"> Protfolio </Link> 
            <Link to="/ContactMe"> ContactMe </Link> 
        </div>
    )
}
export default Links;