import React, { forwardRef } from 'react';
import Select from 'react-select';

export const MySelect = forwardRef(({ options, onChange, value, placeholder, isInvalid }, ref) => {
    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderColor: isInvalid ? '#BE1F2A' : '#00000033',
            boxShadow: 'none',
            padding: '18px',
            borderRadius: '6px'
        }),
        menu: (provided) => ({
            ...provided,
            marginTop: '0.5rem',
        }),
        option: (provided, state) => ({
            ...provided,
            padding: '12px 18px',
            backgroundColor: state.isFocused ? '#F2F2F2' : 'white',
            color: '#1D1D1D',
            '&:hover': {
                backgroundColor: '#E0E0E0',
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#1D1D1D',
        }),
    };

    return (
        <Select
            ref={ref} // ref ni uzatish
            options={options}
            onChange={onChange}
            value={value || ''}
            placeholder={placeholder}
            styles={customStyles}
            classNamePrefix="react-select"
            className='max-w-[498px] w-full mt-3'
        />
    );
});
