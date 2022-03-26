import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import Pokemon from "../components/Pokemon";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    setPokemon(pokemonArray);
    setLoading(false);
  };

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        // <Loader />
        <Row>
          {pokemon.map((p) => (
            <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
              <Pokemon pokemon={p.data} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
