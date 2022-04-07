import { Grid, Typography } from '@mui/material'
import React from 'react'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




const ListadoNoticias = () => {
    const {noticia,totalNoticias,handleChangePagina} = useNoticias()
    const totalpaginas = Math.ceil(totalNoticias / 20)
    console.log(noticia)
  return (
      <>
    <Typography 
    textAlign={'center'} 
    my={5}
    variant='h3'
    component='h2'
    >
        Ultimas Noticias
    </Typography>
    <Grid 
    container
    spacing={2}>
      {noticia.map(noticia => <Noticia key={noticia.url} noticia={noticia}/>)}
    </Grid>
    <Stack
     spacing={2}
     alignItems={'center'}
     my={5}
     >
      <Pagination 
      count={totalpaginas} 
      onChange={handleChangePagina}
      color="primary" />
    </Stack>
    </>
  )
}

export default ListadoNoticias