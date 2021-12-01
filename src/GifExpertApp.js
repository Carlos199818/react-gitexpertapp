import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);
    
    // const handleAdd = () => {
    //     // setCategories([...categories, 'SNK']);
    //     setCategories( cats => [...cats, 'SNK'] );
    // }

    return(
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories = { setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GitGrid 
                            key = { category }
                            category = { category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}