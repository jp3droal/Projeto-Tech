import React from "react"

export default function FilterComponent ({title, inputType, options}){
return(
    
    <div className="FilterComponent">
        <h3>{title}</h3>
        {options.map((option, index) => (
           <label key={index}  className="filter-label">
            <input type={inputType} value={option.value}  className="filter-input"/>
            {option.text}
           </label>
            
        ))}
    </div>
    
)
}