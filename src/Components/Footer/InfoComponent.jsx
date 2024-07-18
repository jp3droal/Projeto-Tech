import React from 'react';
import './InfoComponent.css'

export default function InfoComponent({ title, informations }) {
    return (
        <div className='IComponent'>
            <h2>{title}</h2>
            <ul>
                {informations.map((info, index) => (
                    <li key={index}>
                        <a href={info.link}>{info.text}</a>
                    </li>
                ))} 
            </ul>
        </div>
    );
};