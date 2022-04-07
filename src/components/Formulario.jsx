import { FormControl,InputLabel,Select,MenuItem} from "@mui/material";
import React from 'react'
import useNoticias from "../hooks/useNoticias";

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {

const {handleInputChange,categoria} = useNoticias()

  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select 
            label='Categoria'
            onChange={handleInputChange}
            value={categoria}
            >
            {CATEGORIAS.map(categoria => (
                <MenuItem 
                key={categoria.value} 
                value={categoria.value}>
                {categoria.label}
                </MenuItem>))}
            </Select>
            {/* <Box sx={{
                marginTop: 2
            }}>
            <Button
            fullWidth
            variant='contained'
            color='primary'
            >Buscar Noticias</Button>
            </Box> */}
        </FormControl>
    </form>

  )
}

export default Formulario