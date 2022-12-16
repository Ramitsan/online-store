import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header/header";
import { CardsNav } from "../components/cards-navigation/navigation";

export default function MainPage() {
  return (
    <>
      <Header></Header>
      <main>
        <CardsNav></CardsNav>
        <h2>Main Page</h2>
        <Link to="/basket">
          Go to basket page
        </Link>
        <br />
        <Link to="/product/01">
          Go to product page
        </Link>
      </main>
      <footer></footer>
    </>
  );
}