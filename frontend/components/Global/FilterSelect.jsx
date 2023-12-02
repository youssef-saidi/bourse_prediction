import React, { useState } from 'react';

const FilterSelect = ({key, title, placeholder, options, onOptionSelect }) => {

    return (
        <>

     
                <div key={key} className="relative h-full mx-2">
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
                            <option selected value="" disabled>
                                {placeholder}
                            </option>
                            {options.map((it,index) => (
                                <option key={index} value={title} >
                                    {it}
                                </option>
                            ))}
                        </select>
               
                    </div>
                </div>
         

       

        </>
    );
};

export default FilterSelect;
