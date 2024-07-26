import './ProductOptionsSquare.css';
import { useState } from 'react';

export default function ProductOptionsSquare() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div className='quadradoMain'>
            <p>Tamanho</p>
            <div className='quadrados5'>
                <div className={activeIndex === 0 ? 'active' : ''} onClick={() => handleSelect(0)}><p>39</p></div>
                <div className={activeIndex === 1 ? 'active' : ''} onClick={() => handleSelect(1)}><p>40</p></div>
                <div className={activeIndex === 2 ? 'active' : ''} onClick={() => handleSelect(2)}><p>41</p></div>
                <div className={activeIndex === 3 ? 'active' : ''} onClick={() => handleSelect(3)}><p>42</p></div>
                <div className={activeIndex === 4 ? 'active' : ''} onClick={() => handleSelect(4)}><p>43</p></div>
            </div>
        </div>
    )
}