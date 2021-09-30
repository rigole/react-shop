import React from "react";
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel }
    from './form-input.styles.jsx'

const FormInput = ({ handleChange, label, ...othersProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...othersProps}/>
        {label ? (
            <FormInputLabel
                className={`${
                    othersProps.value.length ? 'shrink' : ''
                } form-input-label` }>
                {label}
            </FormInputLabel>
        ): null}
    </GroupContainer>
)

export default FormInput

