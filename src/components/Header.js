import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types';
const Header = ({title}) => {
return(
    <header className="header">
        <h1 style={headingSyle}>
            {title}</h1>
            <Button color='steelblue' text='push me' 
            
            />

    </header>

) 
} 
Header.defaultProps = {
    title: 'task tracker'
}
const headingSyle = {
    color: 'blue',
    
}
Header.prototype = {
    title: PropTypes.string
}
export default Header