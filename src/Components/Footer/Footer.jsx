import React from 'react';

export default function InfoComponent ({ title, informations }) {
  return (
    <div>
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

