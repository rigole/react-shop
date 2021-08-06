import React from "react";
import './custom-button.styles.scss'

const CustomButtonComponent = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)

export default CustomButtonComponent