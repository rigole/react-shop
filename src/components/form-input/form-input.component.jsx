import React from "react";
import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...othersProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...othersProps}/>
        {label ? (
            <label
                className={`${
                    othersProps.value.length ? 'shrink' : ''
                } form-input-label` }>
                {label}
            </label>
        ): null}
    </div>
)

export default FormInput

