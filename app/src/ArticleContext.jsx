import React from 'react';
import {createContext,useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const ArticleContext = createContext();

export const ArticleProvider = ({children}) =>{
    const[topic,setArticle] = useState();
    const navigate = useNavigate()
    const handleSet = (x)=>{
       
        setArticle(x);
        navigate('/articles')

    }
    return (
       <ArticleContext.Provider value={{topic,handleSet}} >{children}</ArticleContext.Provider>
    )
}