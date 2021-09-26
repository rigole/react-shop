import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButtonComponent = ({ children, ...props }) => (
    <CustomButtonContainer {...props} >
        {children}
    </CustomButtonContainer>
)

export default CustomButtonComponent