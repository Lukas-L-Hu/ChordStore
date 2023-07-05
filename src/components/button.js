import React from 'react';

const Button = ({ color , onClick}) => {
    return (
        <button className='btn' onClick={onClick} style={{backgroundColor: color}}>
        Add
        </button>
    )
}

export default Button