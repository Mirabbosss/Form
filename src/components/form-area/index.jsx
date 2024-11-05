import React, { forwardRef } from 'react';

export const MyArea = forwardRef(({ id, placeholder, onChange, value }, ref) => {
    return (
        <textarea
            ref={ref}  // ref ni uzatish
            value={value || ''}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            className="outline-none text-[15px] text-[#1D1D1D] w-full resize-none min-h-[138px] h-full"
        />
    );
});
