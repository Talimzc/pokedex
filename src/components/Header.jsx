import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container className="d-flex justify-content-center">
          <LinkContainer to="/">
            <img src={`./pokedex.png`} alt="Logo" width={200} />
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
