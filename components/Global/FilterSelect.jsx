import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const FilterSelect = ({ title, placeholder, options, onOptionSelect }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const dispatch = useDispatch()


    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);

        console.log(selectedValue)
        if (onOptionSelect) {
            dispatch(onOptionSelect(selectedValue));
        }
    };

    return (
        <div className="px-1">
            <h1 className="text-sm lg:text-base font-normal leading-6 my-2 lg:my-4">{title}</h1>
            <select className="h-8 lg:h-12 rounded-md w-full px-3 text-xs font-normal leading-5 lg:text-sm" style={{ border: "1px solid #D9E2EE" }}
                value={selectedOption}
                onChange={handleSelectChange}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((it) => (
                    <option key={it.option} value={it.option}>
                        {it.option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterSelect;
