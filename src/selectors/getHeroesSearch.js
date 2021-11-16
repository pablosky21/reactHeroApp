import React from 'react'
import { heroes } from '../data/heroes'


const getHeroesSearch = (name='') => {
   
    if(name===''){
        return[];

    }
    name = name.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}

export default getHeroesSearch
