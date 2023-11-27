
const FilterCheckbox = ({title,options,selectedOptions,handleCheckboxChange}) => {
    
    return (
        <div className="p-3">
            <div className="font-semibold pb-2">{title}</div>
            <div className="grid grid-cols-2">
            {options.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="checkbox"
                        // checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                    <span>{option}</span>
                </label>

            ))}
            </div>
        </div>
    )
}

export default FilterCheckbox