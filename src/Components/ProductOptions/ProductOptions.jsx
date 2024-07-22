import React, { useState } from 'react';
import './ProductOptions.css';

const ProductOptions = ({ options, radius, shape, type }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (index) => {
        setSelectedOption(index);
    };

    return (
        <div className="product-options">
            {options.map((option, index) => (
                <div
                    key={index}
                    className={`option ${shape} ${index === selectedOption ? 'selected' : ''}`}
                    style={{
                        borderRadius: shape === 'square' ? radius : '50%',
                        width: shape === 'circle' ? '31px' : 'auto',
                        height: shape === 'circle' ? '31px' : '46px',
                        backgroundColor: type === 'color' ? option : 'transparent',
                        borderColor: index === selectedOption ? 'var(--primary-color)' : 'var(--light-gray-2)',
                        borderWidth: index === selectedOption ? '2px' : '1px',
                        color: type === 'text' ? 'var(--dark-gray-2)' : 'transparent',
                        fontSize: type === 'text' ? '24px' : 'initial',
                    }}
                    onClick={() => handleSelect(index)}
                >
                    {type === 'text' ? option : ''}
                </div>
            ))}
        </div>
    );
};

ProductOptions.defaultProps = {
    radius: '0px',
};

export default ProductOptions;