import { createContext,useState,useEffect } from "react";
import React from 'react'
import axios from "axios";

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria,setCategoria] = useState('general')
    const [noticia,setNoticia] = useState([])
    const [pagina, setPagina]= useState(1)
    const [totalNoticias,setTotalNoticias] = useState (0)
    const handleInputChange = (e) => {
        setCategoria(e.target.value)
    }
    //Uso esto porque va a hacer la peticion ni bien abra la pagina entonces quiero que la haga unicamente cada vez que la categoria se actualiza.
    useEffect (()=> {
        const obtenerNoticia = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const {data} = await axios(url)
            console.log(data)
            setNoticia(data.articles)
            setTotalNoticias(data.totalResults)
            setPagina(1)
    
        }
        obtenerNoticia()
    },[categoria])

    useEffect (()=> {
        const obtenerNoticia = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const {data} = await axios(url)
            console.log(data)
            setNoticia(data.articles)
            setTotalNoticias(data.totalResults)
    
        }
        obtenerNoticia()
    },[pagina])
  
    const handleChangePagina = (e, valor) => {
            setPagina(valor)
    }

  return (
    <NoticiasContext.Provider value={{
        handleInputChange,
        categoria,
        noticia,
        totalNoticias,
        handleChangePagina,
        pagina
        
        

    }}>
            {children}
    </NoticiasContext.Provider>
  )
}
export {NoticiasContext}
export default NoticiasProvider