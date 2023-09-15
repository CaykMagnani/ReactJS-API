import React, { useEffect } from 'react';
import PokemonCard from '../components/PokemonCard.jsx';
import axios from 'axios';

// Impotações do MUI Materials
import NavBar from '../components/NavBar';
import { Box, Container, Grid } from '@mui/material';

function Home() {

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <NavBar />

      <Container maxWidth={false}>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
        </Grid>

      </Container >
    </div>
  );
}

export default Home;
