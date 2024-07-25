import React from "react"
import "./FilterComponent.css"

export default function FilterComponent ({title, inputType, options}){
return(
    
    <div className="filter-component">
        <h3 className="filter-title">{title}</h3>
        <div className="filter-options">
        {options.map((option, index) => (
           <label key={index}  className="filter-label">
            <input type={inputType} value={option.value}  className="filter-input"/>
            {option.text}
           </label>
            
        ))}
        </div>
    </div>
    
)
}