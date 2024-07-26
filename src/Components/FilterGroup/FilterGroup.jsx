import React from "react";
import FilterComponent from "./FilterComponent";
import "./FilterGroup.css"



const Marka = [
    {
        text: 'Adiddas',
    },
    {
        text: 'Calenciaga',
    },
    { 
        text: 'K-Swiss' ,
    },
    {
        text: 'Nike' ,
    },
    {
        text: 'Adiddas',
    }

]

const Categoria = [
    
        {
            text: "Esporte e Lazer", 
        },
        {
            text: "Casual",
        },
        {
            text: "Utilitário",
        },
        {  
            text: "Corrida", 
        }
   
]

const Genero = [
    
        {text: "Masculino",} ,
        {text: "Feminino", },
       { text: "Unisex"},
    
]

const Estado = [
    
      {  text:"Novo", },
       { text:"Usado"},
    
]


export default function FilterGroup(){
    return(
        <div className="filter-group">
            <h1 className="filter-title">Filtrar por</h1>
            <hr/>

            <FilterComponent
            title = 'Marka'
            inputType = 'checkbox'
            options = {Marka}
            />
            <FilterComponent
            title = 'Categoria'
            inputType = 'checkbox'
            options = {Categoria}
            />
            <FilterComponent
            title = 'Gênero'
            inputType = 'checkbox'
            options = {Genero}
            />
            <FilterComponent
            title = 'Estado'
            inputType = 'radio'
            options = {Estado}
            />


        </div>
    )
}