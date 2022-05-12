import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types';
const Header = ({title, onAdd , changeButton}) => {
return(
    <header className="header">
        <h1 style={headingSyle}>
            {title}</h1>
            <Button color={changeButton ? 'red' : 'green'} text={changeButton ? 'close' : 'Add'} 
            onClick = {onAdd}
            />

    </header>

) 
} 
Header.defaultProps = {
    title: 'Puppy '
}
const headingSyle = {
    color: 'blue',
    
}
Header.prototype = {
    title: PropTypes.string
}
export default Header