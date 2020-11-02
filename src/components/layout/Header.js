import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={{display: 'inline'}}> Todo List </h1> <h4 style={{display: 'inline'}}> built in React </h4>
            <br></br>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#444',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    fontWeight: '700'
}

export default Header;