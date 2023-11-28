import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const FilterSelect = ({ title, placeholder, options, onOptionSelect }) => {
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <>

     
                <div className="relative h-full mx-2">
                    <label
                        htmlFor="email"
                        className="text-base bg-transparent font-normal py-2"
                    >
                        {title}
                    </label>
                    <div className="relative w-full">
                        <select className="block p-3 md:w-96 w-80 inputLogin text-base outline-none bg-transparent text-black text-sm pt-5 font-medium" 
                            // value={selectedOption}
                            onChange={onOptionSelect}
                        >
                            <option value="" disabled>
                                {placeholder}
                            </option>
                            {options.map((it) => (
                                <option key={it.value} value={it.value} >
                                    {it.label}
                                </option>
                            ))}
                        </select>
               
                    </div>
                </div>
         

       

        </>
    );
};

export default FilterSelect;
