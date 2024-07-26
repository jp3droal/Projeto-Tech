import './ProductOptionsCircle.css';
import { useState } from 'react';

export default function ProductOptionsCircle() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div className='circuloMain'>
            <p>Tamanho</p>
            <div className='circulos4'>
                <div id='radiusCirculos' className={activeIndex === 0 ? 'active' : ''}>
                    <div style={{ background: '#6eeeff' }}  onClick={() => handleSelect(0)}></div>
                </div>
                <div id='radiusCirculos' className={activeIndex === 1 ? 'active' : ''}>
                    <div style={{ background: '#ff6969' }} onClick={() => handleSelect(1)}></div>
                </div>
                <div id='radiusCirculos' className={activeIndex === 2 ? 'active' : ''}>
                    <div style={{ background: '#5d5d5d' }}  onClick={() => handleSelect(2)}></div>
                </div>
                <div id='radiusCirculos' className={activeIndex === 3 ? 'active' : ''}>
                    <div style={{ background: '#6d70b7' }}  onClick={() => handleSelect(3)}></div>
                </div>
            </div>
        </div>
    )
}