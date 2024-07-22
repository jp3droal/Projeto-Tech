import React from "react";
import FilterComponent from "./FilterComponent";




const Marka = [
    {
        text: 'Adiddas', value:'1'
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
            <h1>Filtrar por</h1>
            <hr/>

            <FilterComponent
            title = 'Markas'
            inputType = 'checkbox'
            options = {Marka}
            />




        </div>
    )
}