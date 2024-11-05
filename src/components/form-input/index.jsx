import React, { forwardRef } from 'react';

export const MyInput = forwardRef(({ type, id, value, onChange, placeholder }, ref) => {
    return (
        <input
            id={id ? id : null}
            type={type || 'text'}
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref} 
            className='outline-none text-[15px] text-[#1D1D1D] w-full py-[7px]'
        />
    );
});
